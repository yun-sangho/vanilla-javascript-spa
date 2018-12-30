let About = {
  render: () => {
    let view = /*html*/ `
              <div name="about">
                  <h1> About </h1>
              </div>
          `;
    return view;
  },
  after_render: async () => {}
};

export default About;
