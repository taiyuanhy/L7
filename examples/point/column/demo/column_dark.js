import { Scene } from '@l7/scene';
import { PointLayer } from '@l7/layers'

const scene = new Scene({
  id: 'map',
  pitch: 35.210526315789465,
  type: 'amap',
  style: 'dark',
  center: [108.524505, 29.873128],
  zoom: 4.4,

});
window.mapScene = scene;
fetch('https://gw.alipayobjects.com/os/rmsportal/oVTMqfzuuRFKiDwhPSFL.json')
  .then((res) => res.json())
  .then((data) => {
    const pointLayer =
      new PointLayer({
      })
        .source(data.list, {
          parser: {
            type: 'json',
            x: 'j',
            y: 'w'
          }
        })
        .shape('cylinder')
        .size('t', function (level) {
          return [1, 2, level * 2 + 20];
        })
        .color('t', [
          '#094D4A', '#146968',
          '#1D7F7E', '#289899',
          '#34B6B7', '#4AC5AF',
          '#5FD3A6', '#7BE39E',
          '#A1EDB8', '#CEF8D6'
        ])
        .style({
          opacity: 1.0,
        })
    scene.addLayer(pointLayer);
    console.log(pointLayer);

  });