let Error404 = {
  render: async () => {
    let view = /*html*/ `
            <div name="404">
                <h1>Page not found</h1>
            </div>
        `;
    return view;
  },
  after_render: async () => {}
};

export default Error404;
