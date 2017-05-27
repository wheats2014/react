/**
 * Created by Administrator on 2017/5/19.
 */
import React, {Component} from 'react';
import {render} from 'react-dom';
import ParentComp from './parentComponent.js'

let list = {list:[{name: 'wheats'}, {name: 'lhw'}, {name: 'sys'}]};
render(<ParentComp {...list}/>, document.getElementById('app'));