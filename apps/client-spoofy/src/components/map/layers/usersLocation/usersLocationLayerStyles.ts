import Feature, { FeatureLike } from 'ol/Feature';
import LRUCache from 'ol/structs/LRUCache';
import { Circle, Fill, Icon, Style } from 'ol/style';
import locationIcon from '../../../../assets/location.svg';

function getCacheId(feature: FeatureLike): string {
  const features: Feature[] = feature.get('features');
  if (features.length === 1) {
    return 'feature';
  }
  return `cluster:${features.length}`;
}

const stylesCache = new LRUCache<Style | Style[]>(1024);

const clusterStyle = (feature: FeatureLike, sizee: number) => {
  const cacheId = getCacheId(feature);

  if (stylesCache.containsKey(cacheId)) {
    return stylesCache.get(cacheId);
  }

  const size: number = feature.get('features').length;

  const style =
    size === 1
      ? new Style({
          image: new Icon({
            src: locationIcon,
            scale: 0.8,
          }),
        })
      : [
          new Style({
            image: new Circle({
              radius: 20,
              fill: new Fill({ color: 'white' }),
            }),
          }),
          new Style({
            image: new Icon({
              src: locationIcon,
              scale: 0.6,
            }),
          }),
          new Style({
            image: new Icon({
              src: locationIcon,
              scale: 0.6,
            }),
          }),
        ];

  stylesCache.set(cacheId, style);

  return style;
};

export default clusterStyle;
