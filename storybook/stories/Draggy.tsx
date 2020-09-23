import React from "react";
import {
    Draggable,
    DropZone
  } from "react-native-drag-drop-and-swap";

  import DraggyInner from './DraggyInner';
/* Canvas props */
interface draggyProps {
    onDrop?: any,
    onHover?: any,
    dragOver?: any,
    item?:any,
    index?: any
  }
  
 export default class Draggy extends React.Component<draggyProps> {
    render() {
      return (
        <Draggable data={this.props.item} style={{ marginTop: 9.5 }}>
          <DropZone
            onDrop={(e: any) => this.props.onDrop(e, this.props.index)}
            onEnter={() =>
              this.props.onHover(this.props.item, this.props.index)
            }
          >
            <DraggyInner
              item={this.props.item}
              index={this.props.index}
            />
          </DropZone>
        </Draggable>
      );
    }
  }