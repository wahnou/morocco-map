


const projection = d3.geoMercator().scale(300)
const pathGenerator = d3.geoPath().projection(projection);

const width = 860;
const height = 800;

document.querySelector('.container').setAttribute('width', width + 10);

const svg = d3.select('svg').attr("width", 960).attr("height", 800);

// svg.append('path')
//   .attr('class', 'sphere')
//   .attr('d', pathGenerator({ type: 'Sphere' }));

d3.json('../data/regions.json')
  .then(data => {
    const regions = topojson.feature(data, data.objects.regions);

    const projection = d3.geoMercator().fitSize([width, height], regions);
    const pathGenerator = d3.geoPath().projection(projection);

    svg.selectAll('path').data(regions.features)
      .enter().append('path')
      .attr('class', 'region')
      .attr('d', pathGenerator);
  });