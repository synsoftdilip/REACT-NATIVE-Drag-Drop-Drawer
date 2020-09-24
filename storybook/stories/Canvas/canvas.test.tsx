// Canvas.test.js
import React from "react";
import renderer from 'react-test-renderer';
import Canvas from "./canvas";
import { render,fireEvent } from "@testing-library/react-native";
import { shallow } from "@testing-library/react-native";


const items = [
  {id: '1' ,name: 'Table', group: 'Furniture',image:'https://homepages.cae.wisc.edu/~ece533/images/airplane.png'},
  {id: '2' ,name: 'Chair', group: 'Furniture',image:'https://homepages.cae.wisc.edu/~ece533/images/boat.png'},
  {id: '3' ,name: 'Door', group: 'Furniture',image:'https://homepages.cae.wisc.edu/~ece533/images/cat.png'},

  {id: '4' ,name: 'TV', group: 'Electronics',image:'https://homepages.cae.wisc.edu/~ece533/images/airplane.png'},
  {id: '5' ,name: 'Camera', group: 'Electronics',image:'https://homepages.cae.wisc.edu/~ece533/images/boat.png'},
  {id: '6' ,name: 'Mobile', group: 'Electronics',image:'https://homepages.cae.wisc.edu/~ece533/images/cat.png'}]

describe('<Canvas />', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<Canvas location = "Left"
      name = "Menu"
    items = {items} 
    showCategories = {true} 
    showTitle = {true} 
    searchIsEnabled = {true}
    disableDragAndDrop={false} 
    title = "Test task"
    closeButtonIsShowing= {true}
    dndName= "Drag and Drop"/>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

test("Should render a component in the itemContainer prop", () => {

  const { getByTestId,getAllByTestId    } = render(
    <Canvas  location="Left"
    name="Menu"
    items={items}
    showTitle={true}
    showCategories={true}
    searchIsEnabled={true}
    disableDragAndDrop={false}
    title={"Test task"}
    closeButtonIsShowing={true}
    dndName={"Drag and Drop"}
     />
  );    
  const drawerBtnClick  =  getByTestId('drawerButtom'); 
  fireEvent.press(drawerBtnClick );
  const ItemDrawerItems =  getAllByTestId('ItemDrawerItems');
  expect(ItemDrawerItems.length).toBe(items.length);
});

test("Should show the Item Drawer in the LEFT position if the LEFT option is used in the location prop", () => {
  const items = [
    {
      id: "1",
      name: "Table",
      group: "Furniture",
      image:
        "https://i.pinimg.com/originals/7a/42/82/7a4282b44d0b6c5339088454cbc9f8da.png"
    }   
  ];

  const { getByTestId,getAllByTestId    } = render(
    <Canvas  location="Left"
    name="Menu"
    items={items}
    showTitle={true}
    showCategories={true}
    searchIsEnabled={true}
    disableDragAndDrop={false}
    title={"Test task"}
    closeButtonIsShowing={true}
    dndName={"Drag and Drop"}
     />
  );    
  const drawerBtnClick  =  getByTestId('drawerButtom'); 
  fireEvent.press(drawerBtnClick );
  const ItemDrawerLocationLeft =  getAllByTestId('ItemDrawerLocationLeft');
  expect(ItemDrawerLocationLeft.length).toBe(items.length);

 
 
});

test("Should show the Item Drawer in the RIGHT position if the RIGHT option is used in the location prop", () => {
  const items = [
    {
      id: "1",
      name: "Table",
      group: "Furniture",
      image:
        "https://i.pinimg.com/originals/7a/42/82/7a4282b44d0b6c5339088454cbc9f8da.png"
    }   
  ];

  const { getByTestId,getAllByTestId    } = render(
    <Canvas  location="Right"
    name="Menu"
    items={items}
    showTitle={true}
    showCategories={true}
    searchIsEnabled={true}
    disableDragAndDrop={false}
    title={"Test task"}
    closeButtonIsShowing={true}
    dndName={"Drag and Drop"}
     />
  );    
  const drawerBtnClick  =  getByTestId('drawerButtom'); 
  fireEvent.press(drawerBtnClick );
  const ItemDrawerLocationRight =  getAllByTestId('ItemDrawerLocationRight');
  expect(ItemDrawerLocationRight.length).toBe(items.length);


});

test("Should show the Item Drawer in the TOP position if the TOP option is used in the location prop", () => {
  const items = [
    {
      id: "1",
      name: "Table",
      group: "Furniture",
      image:
        "https://i.pinimg.com/originals/7a/42/82/7a4282b44d0b6c5339088454cbc9f8da.png"
    }   
  ];

  const { getByTestId,getAllByTestId    } = render(
    <Canvas  location="Top"
    name="Menu"
    items={items}
    showTitle={true}
    showCategories={true}
    searchIsEnabled={true}
    disableDragAndDrop={false}
    title={"Test task"}
    closeButtonIsShowing={true}
    dndName={"Drag and Drop"}
     />
  );    
  const drawerBtnClick  =  getByTestId('drawerButtom'); 
  fireEvent.press(drawerBtnClick );
  const ItemDrawerLocationTop =  getAllByTestId('ItemDrawerLocationTop');
  expect(ItemDrawerLocationTop.length).toBe(items.length);

 
});

test("Should show the Item Drawer in the BOTTOM position if the BOTTOM option is used in the location prop", () => {
  const items = [
    {
      id: "1",
      name: "Table",
      group: "Furniture",
      image:
        "https://i.pinimg.com/originals/7a/42/82/7a4282b44d0b6c5339088454cbc9f8da.png"
    }   
  ];

  const { getByTestId,getAllByTestId    } = render(
    <Canvas  location="Bottom"
    name="Menu"
    items={items}
    showTitle={true}
    showCategories={true}
    searchIsEnabled={true}
    disableDragAndDrop={false}
    title={"Test task"}
    closeButtonIsShowing={true}
    dndName={"Drag and Drop"}
     />
  );    
  const drawerBtnClick  =  getByTestId('drawerButtom'); 
  fireEvent.press(drawerBtnClick );
  const ItemDrawerLocationBottom =  getAllByTestId('ItemDrawerLocationBottom');
  expect(ItemDrawerLocationBottom.length).toBe(items.length);

  
});

test("Should show the Item Drawer in the INLINE position if the INLINE option is used in the location prop", () => {
  const items = [
    {
      id: "1",
      name: "Table",
      group: "Furniture",
      image:
        "https://i.pinimg.com/originals/7a/42/82/7a4282b44d0b6c5339088454cbc9f8da.png"
    }   
  ];

  const { getByTestId,getAllByTestId    } = render(
    <Canvas  location="Inline"
    name="Menu"
    items={items}
    showTitle={true}
    showCategories={true}
    searchIsEnabled={true}
    disableDragAndDrop={false}
    title={"Test task"}
    closeButtonIsShowing={true}
    dndName={"Drag and Drop"}
     />
  );    
  const drawerBtnClick  =  getByTestId('drawerButtom'); 
  fireEvent.press(drawerBtnClick );
  const ItemDrawerLocationInline =  getAllByTestId('ItemDrawerLocationInline');
  expect(ItemDrawerLocationInline.length).toBe(items.length);

  
});

test("Should show a title in the Item Drawer that matches the title prop if provided", () => {
  const items = [
    {
      id: "1",
      name: "Table",
      group: "Furniture",
      image:
        "https://i.pinimg.com/originals/7a/42/82/7a4282b44d0b6c5339088454cbc9f8da.png"
    }   
  ];

  const { getByTestId, getByText } = render(
    <Canvas  location="Left"
    name="Menu"
    items={items}
    showTitle={true}
    showCategories={true}
    searchIsEnabled={true}
    disableDragAndDrop={false}
    title={"Test task"}
    closeButtonIsShowing={true}
    dndName={"Drag and Drop"}
     />
  );  
  const drawerBtnClick  =  getByTestId('drawerButtom'); 
  fireEvent.press(drawerBtnClick );
  expect(getByText(/Test task/i)).toBeTruthy();
});


test("Should not render a title if the showTitle prop is false", () => {
  const items = [
    {
      id: "1",
      name: "Table",
      group: "Furniture",
      image:
        "https://i.pinimg.com/originals/7a/42/82/7a4282b44d0b6c5339088454cbc9f8da.png"
    }   
  ];

  const { getByTestId, queryAllByTestId } = render(
    <Canvas  location="Left"
    name="Menu"
    items={items}
    showTitle={false}
    showCategories={true}
    searchIsEnabled={true}
    disableDragAndDrop={false}
    title={"Test task"}
    closeButtonIsShowing={true}
    dndName={"Drag and Drop"}
     />
  );  

  const drawerBtnClick  =  getByTestId('drawerButtom'); 
  fireEvent.press(drawerBtnClick );
  const title =  queryAllByTestId('menuHeaderTitle');
  expect(title.length).toBe(0);
});

test("Should not show a search component if the searchIsEnabled props is false", () => {
  const items = [
    {
      id: "1",
      name: "Table",
      group: "Furniture",
      image:
        "https://i.pinimg.com/originals/7a/42/82/7a4282b44d0b6c5339088454cbc9f8da.png"
    }   
  ];

  const { queryAllByTestId, getByTestId } = render(
    <Canvas  location="Left"
    name="Menu"
    items={items}
    showTitle={true}
    searchIsEnabled={false}
    showCategories={true}
    disableDragAndDrop={false}
    title={"Test task"}
    closeButtonIsShowing={true}
    dndName={"Drag and Drop"}
    />
  );  
  const drawerBtnClick  =  getByTestId('drawerButtom'); 
  fireEvent.press(drawerBtnClick );
  expect(queryAllByTestId(".search-input").length).toBe(0);
});

test("Should not render a close button if the closeButtonIsShowing prop is false", () => {
  const items = [
    {
      id: "1",
      name: "Table",
      group: "Furniture",
      image:
        "https://i.pinimg.com/originals/7a/42/82/7a4282b44d0b6c5339088454cbc9f8da.png"
    }   
  ];

  const {  getByTestId, queryAllByTestId } = render(
    <Canvas  location="Left"
    name="Menu"
    items={items}
    showTitle={true}
    searchIsEnabled={true}
    disableDragAndDrop={false}
    title={"Test task"}
    showCategories={true}
    closeButtonIsShowing={false}
    dndName={"Drag and Drop"}
     />
  );  
  const drawerBtnClick  =  getByTestId('drawerButtom'); 
  fireEvent.press(drawerBtnClick );
  expect(queryAllByTestId("closeBtn").length).toBe(0);
});


test("Should not allow categories if the showCategories prop is false", () => {
  const items = [
    {
      id: "1",
      name: "Table",
      group: "Furniture",
      image:
        "https://i.pinimg.com/originals/7a/42/82/7a4282b44d0b6c5339088454cbc9f8da.png"
    }   
  ];

  const {  getByTestId,queryAllByTestId } = render(
    <Canvas  location="Left"
    name="Menu"
    items={items}
    showTitle={true}
    searchIsEnabled={true}
    disableDragAndDrop={true}
    title={"Test task"}
    closeButtonIsShowing={true}
    dndName={"Drag and Drop"}
    showCategories={false}
     />
  );  
  const drawerBtnClick  =  getByTestId('drawerButtom'); 
  fireEvent.press(drawerBtnClick );
  expect(queryAllByTestId("showCategories").length).toBe(0);
});



test("Should trigger the onClose() event when the drawer is to be closed", async () => {
  const items = [
    {
      id: "1",
      name: "Table",
      group: "Furniture",
      image:
        "https://i.pinimg.com/originals/7a/42/82/7a4282b44d0b6c5339088454cbc9f8da.png"
    }   
  ];

  const {  getByTestId,queryAllByTestId } =  render(
    <Canvas  location="Left"
    name="Menu"
    items={items}
    showTitle={true}
    searchIsEnabled={true}
    disableDragAndDrop={true}
    title={"Test task"}
    closeButtonIsShowing={true}
    showCategories={true}
    dndName={"Drag and Drop"}
    />
  );  
  const drawerBtnClick  =  await getByTestId('drawerButtom'); 
  fireEvent.press(drawerBtnClick );

  const toClose =  await getByTestId('closeBtn'); 
  fireEvent.press(toClose);

 
  expect(queryAllByTestId("closeBtn").length).toBe(0);
});


