let Home = {
  render: () => {
    let view = /*html*/ `
              <div name="home">
                  <h1>Home</h1>
              </div>
          `;
    return view;
  },
  after_render: async () => {}
};

export default Home;
