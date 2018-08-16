/*
Copyright 2016 Capital One Services, LLC

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and limitations under the License.

SPDX-Copyright: Copyright (c) Capital One Services, LLC
SPDX-License-Identifier: Apache-2.0
*/

'use strict';

import React, { Component } from 'react';
import { View, StyleSheet, Dimensions, Text } from 'react-native';

import { StockLine } from 'react-native-pathjs-charts';

let { width } = Dimensions.get('window');
const data = [
  // [{
  // [{
  //   "x": 0,
  //   "y": 132189
  // }, {
  //   "x": 1,
  //   "y": 61705
  // }, {
  //   "x": 2,
  //   "y": 154976
  // }, {
  //   "x": 3,
  //   "y": 81304
  // }, {
  //   "x": 4,
  //   "y": 172572
  // }, {
  //   "x": 5,
  //   "y": 140656
  // }, {
  //   "x": 6,
  //   "y": 148606
  // }, {
  //   "x": 7,
  //   "y": 53010
  // }, {
  //   "x": 8,
  //   "y": 110783
  // }, {
  //   "x": 9,
  //   "y": 196446
  // }, {
  //   "x": 10,
  //   "y": 117057
  // }, {
  //   "x": 11,
  //   "y": 186765
  // }, {
  //   "x": 12,
  //   "y": 174908
  // }, {
  //   "x": 13,
  //   "y": 75247
  // }, {
  //   "x": 14,
  //   "y": 192894
  // }, {
  //   "x": 15,
  //   "y": 150356
  // }, {
  //   "x": 16,
  //   "y": 180360
  // }, {
  //   "x": 17,
  //   "y": 175697
  // }, {
  //   "x": 18,
  //   "y": 114967
  // }],
  [{
    "x": 0,
    "y": 125797
  }, {
    "x": 1,
    "y": 256656
  }, {
    "x": 2,
    "y": 222260
  }, {
    "x": 3,
    "y": 265642
  }, {
    "x": 4,
    "y": 263902
  }, {
    "x": 5,
    "y": 213453
  }, {
    "x": 6,
    "y": 289461
  }, {
    "x": 7,
    "y": 293850
  }, {
    "x": 8,
    "y": 206079
  }, {
    "x": 9,
    "y": 240859
  }, {
    "x": 10,
    "y": 252776
  }, {
    "x": 11,
    "y": 297282
  }, {
    "x": 12,
    "y": 175177
  }, {
    "x": 13,
    "y": 169233
  }, {
    "x": 14,
    "y": 237827
  }, {
    "x": 15,
    "y": 242429
  }, {
    "x": 16,
    "y": 218230
  }, {
    "x": 17,
    "y": 181511
  }, {
    "x": 18,
    "y": 193227
  }, {
    "x": 19,
    "y": 193227
  }, {
    "x": 20,
    "y": 183227
  }, {
    "x": 21,
    "y": 203227
  }, {
    "x": 22,
    "y": 243227
  }, {
    "x": 23,
    "y": 253227
  }, {
    "x": 24,
    "y": 273227
  }, {
    "x": 25,
    "y": 283227
  }, {
    "x": 26,
    "y": 293227
  }, {
    "x": 27,
    "y": 293227
  }, {
    "x": 28,
    "y": 303227
  }, {
    "x": 29,
    "y": 323227
  }, {
    "x": 30,
    "y": 353227
  }, {
    "x": 31,
    "y": 353227
  }]
];

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f7f7f7',
  },
});

class StockLineChartBasic extends Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  componentWillMount () {
    this._panHandlerStart = this._panHandlerStart.bind(this);
    this._panHandlerMove = this._panHandlerStart.bind(this);
    this._panHandlerEnd = this._panHandlerEnd.bind(this);
  }

  static navigationOptions = ({ navigation }) => ({
    header: null
  });

  _panHandlerStart(cursorPositionX, cursorPositionY) {
    console.log('start', cursorPositionX, cursorPositionY);
    this.setState({
      selectedDataPointPosition: String(Math.floor(cursorPositionX * (data[0].length - 1)))
    });
  }
  _panHandlerMove(cursorPositionX, cursorPositionY) {
    console.log('move', cursorPositionX, cursorPositionY);
    this.setState({
      selectedDataPointPosition: String(Math.floor(cursorPositionX * (data[0].length - 1)))
    });
  }
  _panHandlerEnd(cursorPositionX) {
    this.setState({
      selectedDataPointPosition: String(Math.floor(cursorPositionX * (data[0].length - 1)))
    });
  }

  render() {

    const options = {
      width,
      height: 250,
      color: '#2980B9',
      backgroundColor: '#d0d4db',
      margin: {
        top: 10,
        left: 10,
        bottom: 30,
        right: 10
      },
      animate: {
        type: 'delayed',
        duration: 200
      },
      axisX: {
        showAxis: true,
        showLines: true,
        showLabels: true,
        showTicks: true,
        zeroAxis: false,
        orient: 'bottom',
        tickValues: [],
        label: {
          fontFamily: 'Arial',
          fontSize: 8,
          fontWeight: true,
          fill: '#34495E'
        }
      },
      axisY: {
        showAxis: true,
        showLines: true,
        showLabels: true,
        showTicks: true,
        zeroAxis: false,
        orient: 'left',
        tickValues: [],
        label: {
          fontFamily: 'Arial',
          fontSize: 8,
          fontWeight: true,
          fill: '#34495E'
        }
      },
      interaction: true,
      cursorLine: {
        stroke: 'rgb(158,162,166)',
        strokeWidth: 2
      }
    };

    return (
      <View style={styles.container}>
        {/* <Text> Ngay: { this.state.selectedDataPointPosition + '/08'}</Text> */}
        <StockLine
          panHandlerStart={this._panHandlerStart}
          panHandlerMove={this._panHandlerMove}
          panHandlerEnd={this._panHandlerEnd}
          data={data}
          options={options}
          convert={(date)=>{
            
          }}
          xKey='x'
          yKey='y' />
      </View>
    );
  }
}

export default StockLineChartBasic;
