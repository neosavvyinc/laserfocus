import BoardColumn from './BoardColumn';

export default () => (
    <div className="board">

        <BoardColumn/>
        <BoardColumn/>
        <BoardColumn/>
        <BoardColumn/>

        <style jsx>{`
        .board {
            margin: auto;
            display: flex;
            width: 100%;
            height: 100%;
        }

        `}
    </style>
    </div>
)