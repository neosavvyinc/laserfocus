import BoardColumn from './BoardColumn';

export default () => (
    <div className="board">

        <BoardColumn/>
        <BoardColumn/>
        <BoardColumn/>
        <BoardColumn/>

        <style jsx>{`
        .board {
            margin: 0 32px;
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            //height: 100%;
        }

        `}
    </style>
    </div>
)