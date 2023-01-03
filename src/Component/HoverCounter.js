import withCounter from '../HOC/withCounter';

const ClickCounter = ({ counter, handleClickCounter }) => (
    <div>
        <h1 onMouseOver={handleClickCounter}>Hoverd {counter} times</h1>
    </div>
);

export default withCounter(ClickCounter);
