import { Point } from "ol/geom";
import { fromLonLat } from "ol/proj";
import { useAppSelector } from "redux/store";
import { zoomInLocation } from "@utils/zoomLocation";
import { RFeature, RFeatureUIEvent, RLayerCluster, RStyle } from "rlayers";

import locationIcon from '../../../../assets/location.svg'
import clusterStyle from "./usersLocationLayerStyles";
import { useState } from "react";
import { User } from "@models/interface/user";
import PopupCard from "components/map/popupCard/popupCard";

const Z_INDEX = 10
const DISTANCE = 50
const UsersLocationLayer = () => {
	const users = useAppSelector((state) => state.users.users);

	const [selctedUser, setSelctedUser] = useState<User | undefined>(undefined);
	const handlePointerEnter = ({ map }: RFeatureUIEvent) => {
		map.getViewport().style.cursor = "pointer";
	}

	const handlePointerLeave = ({ map }: RFeatureUIEvent) => {
		map.getViewport().style.cursor = "";
	}

	const handleClickFeature = (event: RFeatureUIEvent) => {
		const features = event.target.get("features");
		if (features.length > 1) {
			return zoomInLocation(event, 10)
		} else {
			const selectedUserId = event.target.get('features')[0]['values_']['id']
			setSelctedUser(users.find((user: User) => user.id === selectedUserId));
			return zoomInLocation(event, 15)
		}

	}

	return (
		<div>
			<RLayerCluster
				zIndex={Z_INDEX}
				distance={DISTANCE}
				style={(feature) => clusterStyle(feature)}
				onPointerEnter={handlePointerEnter}
				onPointerLeave={handlePointerLeave}
				onClick={handleClickFeature}
			>
				<RStyle.RStyle>
					<RStyle.RIcon scale={0.8} src={locationIcon} />
					<RStyle.RStroke color={'#0000ff'} width={2} />
				</RStyle.RStyle>
				{users.map((user) => (
					<RFeature
						key={user.id}
						geometry={new Point(fromLonLat(user.coordinates as number[]))}
						properties={{ id: user.id }}
					>
					</RFeature>
				))}
			</RLayerCluster >
			{selctedUser && <PopupCard setSelctedUser={setSelctedUser} userSelected={selctedUser} />}

		</div>
	);
}

export default UsersLocationLayer;