/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import Chart from 'react-apexcharts';
import '../../index.css';

const Skills = props => {
  const { skills } = props;
  const data = [];
  const categories = [];
  skills.forEach(skill => {
    data.push(skill.weight);
    categories.push(skill.name);
  });
  const series = [{ data }];
  const options = {
    chart: {
      type: 'bar',
      height: 350,
    },
    plotOptions: {
      bar: {
        horizontal: true,
      },
    },
    dataLabels: {
      enabled: false,
    },
    xaxis: {
      categories,
    },
  };
  return (
    <div>
      <Chart
        options={options}
        series={series}
        type="bar"
        height={data.length * 20}
      />
    </div>
  );
};

Skills.propTypes = {
  skills: PropTypes.array.isRequired,
};

export default Skills;
