export default function ShowCount({ count, title }) {
    console.log(`Rendering ${title}.....`);
    return (
        <p>
            {title} is {count}
        </p>
    );
}
