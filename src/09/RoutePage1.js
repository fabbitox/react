import { useParams } from "react-router-dom";

const RoutePage1 = () => {
    const fruit = useParams().item;

    return (
        <article>
            <header>
                <h1>
                    RoutePage1
                </h1>
            </header>
            <h2>{fruit}</h2>
        </article>
    )
}

export default RoutePage1;