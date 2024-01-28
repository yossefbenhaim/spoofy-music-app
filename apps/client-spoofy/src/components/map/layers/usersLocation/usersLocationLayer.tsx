import { Point } from "ol/geom";
import { useRef, useState } from "react";
import { fromLonLat } from "ol/proj";
import { useAppSelector } from "redux/store";
import { zoomInLocation } from "@utils/zoomLocation";
import { RFeature, RFeatureUIEvent, RLayerCluster, ROverlay, RPopup, RStyle } from "rlayers";

import locationIcon from '../../../../assets/location.svg'
import PopupCard from "components/map/popupCard/popupCard";
import clusterStyle from "./usersLocationLayerStyles";

const Z_INDEX = 10
const DISTANCE = 50
const UsersLocationLayer = () => {
	const users = useAppSelector((state) => state.users.users);
	const popup = useRef<RPopup>(null);
	const [sizeIcon, setSizeIcon] = useState<number>(0)

	const handlePointerEnter = ({ map }: RFeatureUIEvent) => {
		setSizeIcon(10)
		map.getViewport().style.cursor = "pointer";
	}

	const handlePointerLeave = ({ map }: RFeatureUIEvent) => {
		setSizeIcon(5)
		map.getViewport().style.cursor = "";
	}

	const handleClickFeature = (event: RFeatureUIEvent) => {
		const features = event.target.get("features");
		if (features.length > 1) {
			return zoomInLocation(event, 10)
		} else {
			return zoomInLocation(event, 15)
		}
	}

	return (
		<RLayerCluster
			zIndex={Z_INDEX}
			distance={DISTANCE}
			style={(feature) => clusterStyle(feature, sizeIcon)}
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
					<RPopup ref={popup} positioning="bottom-center" trigger={"click"} >
						<PopupCard key={user.id} coordinates={user.coordinates as number[]} firstName={user.firstName} lastName={user.lastName} />
					</RPopup>
				</RFeature>
			))}
		</RLayerCluster >
	);
}

export default UsersLocationLayer;