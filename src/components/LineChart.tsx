import React from 'react';
import { View } from 'react-native';
import Svg, { Path, G } from 'react-native-svg';
import { style } from './Style';

interface LineChartProps {
  width: number;
  height: number;
  data: number[];
}
type Props = {
  dataCoin: string,
 
 }
const LineChart: React.FC<LineChartProps> = ({ width, height, data }) => {
  const minY: number = Math.min(...data);
  const maxY: number = Math.max(...data);
  const scaleX: number = width / (data.length - 1);
  const scaleY: number = height / (maxY - minY);

  const points: string = data
    .map((value, index) => `${index * scaleX},${height - (value - minY) * scaleY}`)
    .join(' ');

  const path: string = `M${points}`;

  return (
    <View >
      <Svg width={width} height={height}>
        <G>
          <Path d={path} fill="none" stroke="white" strokeWidth="3" />
        </G>
      </Svg>
    </View>
  );
};

interface LineChartExampleProps {
  dataCoin: number[]; 
}

const LineChartExample: React.FC<LineChartExampleProps> = ({ dataCoin }) => {
  
  return <LineChart width={400} height={200} data={dataCoin} />;
};

export default LineChartExample;
