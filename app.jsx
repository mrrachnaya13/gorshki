const { categories, hero, pages } = window.siteData;

function CategoryTabs({ activeId }) {
  return (
    <section className="tabs" aria-label="Категории товаров">
      {categories.map((category) => (
        <a
          key={category.id}
          className={`tab ${activeId === category.id ? "active" : ""}`}
          href={category.href}
        >
          <img src={category.image} alt={category.title} />
          <span>{category.title}</span>
        </a>
      ))}
    </section>
  );
}

function HomePage() {
  const [darkMode, setDarkMode] = React.useState(false);

  React.useEffect(() => {
    document.body.classList.toggle("dark", darkMode);
    return () => document.body.classList.remove("dark");
  }, [darkMode]);

  return (
    <main className="page">
      <header className="topbar">
        <div>
          <h1 className="title">Магазин растений</h1>
          <p className="subtitle">Выберите категорию и перейдите к подборкам</p>
        </div>
        <button className="btn" onClick={() => setDarkMode((value) => !value)}>
          {darkMode ? "Светлая тема" : "Тёмная тема"}
        </button>
      </header>

      <CategoryTabs />

      <section className="hero" aria-label="Большое фото растения">
        <img src={hero} alt="Большое изображение растения" />
        <p className="caption">Натуральная зелень для вашего пространства</p>
      </section>

      <section className="cards" aria-label="Популярные подборки">
        {pages.plants.items.map((item) => (
          <article className="card" key={item.name}>
            <img src={item.image} alt={item.name} />
            <h3>{item.name}</h3>
            <p>{item.text}</p>
          </article>
        ))}
      </section>
    </main>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<HomePage />);
