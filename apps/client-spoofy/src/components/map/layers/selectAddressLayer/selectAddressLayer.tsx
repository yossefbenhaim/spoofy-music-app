import { useCallback, useEffect, useState } from "react";
import { fromLonLat, toLonLat } from "ol/proj";
import { Coordinate } from "ol/coordinate";
import { Point } from "ol/geom";
import "ol/ol.css";

import { RLayerVector, RFeature, ROverlay, RStyle } from "rlayers";
import locationIcon from "../../../../assets/location.svg";
import { useDispatch } from "react-redux";
import { setCoordinates } from "redux/slice/currentCoordinatesSelectAddress";

const coords: Record<string, Coordinate> = {
	origin: [2.364, 48.82],
	Montmartre: [35.047, 32.463],
};

const SelectAddressLayer = () => {

	const [placeLoc, setPlaceLoc] = useState(coords.Montmartre);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(setCoordinates([Number(placeLoc[0].toFixed(3)), Number(placeLoc[1].toFixed(3))]))
	}, [placeLoc])

	useEffect(() => {
		const viewport = document.querySelector('.ol-viewport') as HTMLElement;
		if (viewport) {
			viewport.style.borderRadius = '15px';
			viewport.style.overflow = 'hidden';
		}
	}, []);

	return (
		<>
			<RLayerVector>
				<RFeature
					geometry={new Point(fromLonLat(placeLoc))}
					onPointerDrag={useCallback((e: any) => {
						const coords = e.map.getCoordinateFromPixel(e.pixel);
						e.target.setGeometry(new Point(coords));
						return false;
					}, [])}
					onPointerDragEnd={useCallback((e: any) => {
						const coords = e.map.getCoordinateFromPixel(e.pixel);
						setPlaceLoc(toLonLat(coords));
					}, [])}
					onPointerEnter={useCallback(
						(e: any) =>
							(e.map.getTargetElement().style.cursor = "move") && undefined,
						[]
					)}
					onPointerLeave={useCallback(
						(e: any) =>
							(e.map.getTargetElement().style.cursor = "initial") &&
							undefined,
						[]
					)}
				>
					<RStyle.RStyle>
						<RStyle.RIcon src={locationIcon} anchor={[0.5, 0.8]} />
					</RStyle.RStyle>
					<ROverlay >Move me</ROverlay>
				</RFeature>
			</RLayerVector>
		</>
	);
}
export default SelectAddressLayer;
