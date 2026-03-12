const { categories, pages } = window.siteData;

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

function CategoryPage() {
  const pageKey = document.body.dataset.page;
  const pageData = pages[pageKey] || pages.plants;

  return (
    <main className="page">
      <header className="topbar">
        <div>
          <h1 className="title">{pageData.title}</h1>
          <p className="subtitle">{pageData.subtitle}</p>
        </div>
        <a className="btn" href="index.html">
          На главную
        </a>
      </header>

      <CategoryTabs activeId={pageKey} />

      <section className="cards" aria-label={`Товары категории ${pageData.title}`}>
        {pageData.items.map((item) => (
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

ReactDOM.createRoot(document.getElementById("root")).render(<CategoryPage />);
