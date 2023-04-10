import { useRef } from "react";
import { Container } from "./styles";
import { MdAdd } from 'react-icons/md';
import { Card } from '../Card';
import { useDrop } from "react-dnd";
import { EmptyCard } from "../EmptyCard";

export function List({ data, index: listIndex }){
  const ref = useRef();
  

  const [{ isOver, isOverCurrent }, dropRef] = useDrop({
    accept: 'CARD',
    hover(item, monitor) {
      console.log('É o item que ta no list', item);
    },
    collect: (monitor) => ({
      isOver: monitor.getItem(),
      isOverCurrent: monitor.isOver({ shallow: true }),
    }),
  })

  dropRef(ref);

  console.log(isOver, isOverCurrent)

  return(
    <Container done={data.done} ref={ref}>
      <header>
        <h2>{data.title}</h2>
        {data.creatable && (
          <button type="button">
            <MdAdd size={24} color="#fff" />
          </button>
        )}
      </header>

      <ul>
        {data.cards.length ? (
          data.cards.map((card, index) => <Card key={card.id} data={card} index={index} listIndex={listIndex} />)
        ) : (
          <EmptyCard index={0} listIndex={listIndex}/>
        )}
      </ul>
    </Container>
  )
}