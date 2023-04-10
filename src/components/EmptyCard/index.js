import { useRef, useContext } from "react";
import { Container, Label } from "./styles";
import { useDrag, useDrop } from "react-dnd";
import BoardContext from "../Board/context";

export function EmptyCard({ index, listIndex }) {
  const ref = useRef();
  const { move } = useContext(BoardContext)
  // const { id, content } = data

  const [{ isDragging }, dragRef] = useDrag({
    type: 'CARD',
    item: { 
      // id,
      index,
      // content,
      listIndex,
    },
    collect: monitor => ({
      isDragging: monitor.isDragging(),
    })
  })

  const [, dropRef] = useDrop({
    accept: 'CARD',
    drop(item, _) {
      const draggedListIndex = item.listIndex;
      const targetListIndex = listIndex;

      const draggedIndex = item.index;
      const targetIndex = index;
      
      if (draggedIndex === targetIndex && draggedListIndex === targetListIndex) return;

      // const targetSize = ref.current.getBoundingClientRect();
      // const targetCenter = (targetSize.bottom - targetSize.top) / 2;
      
      // const draggedOffset = monitor.getClientOffset();
      // const draggedTop = draggedOffset.y - targetSize.top;

      // if (draggedIndex < targetIndex && draggedTop < targetCenter) return;
      // if (draggedIndex > targetIndex && draggedTop > targetCenter) return;

      move(draggedListIndex, targetListIndex, draggedIndex, targetIndex);
      item.index = targetIndex;
      item.listIndex = targetListIndex;
    }
  })

  dragRef(dropRef(ref));

  return(
    <Container ref={ref} isDragging={isDragging}>
      {/* <header>
        {data.labels.map((label, index) => <Label key={index} color={label}/>)}
      </header>
      <p>{data.content}</p>
      {data.user && <img src={data.user} alt="Avatar de Jefferson Luís"/>} */}
    </Container>
  )
}