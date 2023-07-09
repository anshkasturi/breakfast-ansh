const authors = [
  {
    id: 1,
    name: 'Aaipufh',
    description: 'doasiufhaosudifhoasdiuhfaosdufh aosduhfoasuidhfoausdhfoudashfouashdfouashfouahofuahoguihae goiuahsdo uhas f oaiushf oaiuhf aoiufh aoiufha ofuiha ofuhwq fouhf oasuidhf oaufh asofiuha ofyha fohafoiuashfo iasuhfoaiyufh eqowirufhq ofuhasofhe rfoiuearhf sadouifh asofuyhao fuhqe orhq',
    photo: 'https://storage.googleapis.com/breakfast-ansh-and-dinner/test_author_jpeg.png',
    instagram: 'https://www.instagram.com/author1/',
  },
  {
    id: 2,
    name: 'Ansh',
    description: 'doasiufhaosudifhoasdiuhfaosdufhao sduhfoasuidhfoausdhfoudashfouashdfouashfouahofuahoguihae goiuahsdo uhas foiuahf oaisuhf oasduhf oaushf oaiushf oaiuhf aoiufh aoiufha ofuiha ofuhwq fouhf oasuidhf oaufh asofiuha ofyha fohafoiuashfo iasuhfoaiyufh eqowirufhq ofuhasofhe rfoiuearhf sadouifh asofuyhao fuhqe orhq',
    photo: 'https://storage.googleapis.com/breakfast-ansh-and-dinner/test_author_jpeg.png',
    instagram: 'https://www.instagram.com/author2/',
  },
  // Add more authors as needed
];

function Authors() {
  return (
    <div className="container">
      <h1>Authors</h1>
      <div className="authors">
      {authors.map((author) => (
        <div className="author" key={author.id} id={author.name}>
          <div className="photo">
            <img src={author.photo} alt={author.name} />
          </div>
          <div className="info">
            <div className="auhtor--name"><h2>{author.name}</h2></div>
            <p>{author.description}</p>
            <a href={author.instagram} target="_blank" rel="noopener noreferrer">
            <img src ="https://storage.googleapis.com/breakfast-ansh-and-dinner/instagram-logo.png" />
            </a>
          </div>
        </div>
      ))}
      </div>
    </div>
  );
}

export default Authors;
