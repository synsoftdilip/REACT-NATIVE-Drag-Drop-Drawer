import React from 'react';
import { storiesOf } from '@storybook/react-native';
import Canvas from './Canvas';

{
  /* category array for menu*/
}
const items = [
  {id: '1' ,name: 'Table', group: 'Furniture',image:'https://homepages.cae.wisc.edu/~ece533/images/airplane.png'},
  {id: '2' ,name: 'Chair', group: 'Furniture',image:'https://homepages.cae.wisc.edu/~ece533/images/boat.png'},
  {id: '3' ,name: 'Door', group: 'Furniture',image:'https://homepages.cae.wisc.edu/~ece533/images/cat.png'},

  {id: '4' ,name: 'TV', group: 'Electronics',image:'https://homepages.cae.wisc.edu/~ece533/images/airplane.png'},
  {id: '5' ,name: 'Camera', group: 'Electronics',image:'https://homepages.cae.wisc.edu/~ece533/images/boat.png'},
  {id: '6' ,name: 'Mobile', group: 'Electronics',image:'https://homepages.cae.wisc.edu/~ece533/images/cat.png'}]

 
storiesOf('Canvas', module).add('to Storybook', () => 
<Canvas 
   location = "Left"
   name = "Menu"
   items = {items} 
   showCategories = {true} 
   showTitle = {true} 
   searchIsEnabled = {true}
   disableDragAndDrop={false} 
   title = "Test task"
   closeButtonIsShowing= {true}
   dndName= "Drag and Drop"/>);




  