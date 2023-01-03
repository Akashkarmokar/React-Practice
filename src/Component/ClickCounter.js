import withCounter from '../HOC/withCounter';

const ClickCounter = ({ counter, handleClickCounter }) => (
    <div>
        <button type="button" onClick={handleClickCounter}>
            Clicked {counter} times
        </button>
    </div>
);

export default withCounter(ClickCounter);
