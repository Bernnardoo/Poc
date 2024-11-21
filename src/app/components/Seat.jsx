import styles from './RoomSeat.module.css';

export default function Seat({ selected, purchased, onSelect, number }) {
    const seatClass = `${styles.seat} 
    ${selected ? styles.choosenSeat : ''} 
    ${purchased ? styles.unavailable : ''}`.trim();

    return (
        <div 
            className={seatClass}
            onClick={() => !purchased && onSelect(!selected)}
        >
            {number}
        </div>
    );
}
