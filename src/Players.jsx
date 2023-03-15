const Players = () => {
    const Players = ["Pedri", "Gavi", "Araujo"];
    return (
        <div>
            <ul>
                {Players.map((Player, i) => (
                    <li key={Player}>
                        {i + 1} - {Player}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Players;