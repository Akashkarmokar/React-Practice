import Bracket from './Composition/Bracket';
import Emoji from './Composition/Emoji';
import Text from './Composition/Text';

function App() {
    return (
        <div>
            <Emoji>
                {(addEmojiHandler) => (
                    <Bracket>
                        {(addBracket) => (
                            <Text addEmojiHandler={addEmojiHandler} addBracket={addBracket} />
                        )}
                    </Bracket>
                )}
            </Emoji>
        </div>
    );
}

export default App;
