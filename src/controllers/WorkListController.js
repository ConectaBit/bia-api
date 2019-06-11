const cheerio = require("cheerio");
const fetch = require("node-fetch");

module.exports = {
  async show(req, res) {
    const articles = await fetch(
      `http://bia.ifpi.edu.br:8080/jspui/simple-search?query=&filter_field_1=cnpq&filter_type_1=equals&filter_value_1=CIENCIAS+EXATAS+E+DA+TERRA%3A%3AFISICA&sort_by=score&order=desc&rpp=10&etal=0&start=0`
    );

    const $ = cheerio.load(await articles.text(), {
      normalizeWhitespace: true
    });

    let datas = [],
      titles = [],
      authors = [],
      uris = [];

    const setDatas = () => {
      for (let i = 0; i < 10; i++) {
        datas.push(
          $("tr [headers=t1]")
            .eq(i)
            .text()
        );
      }
    };

    const setTitles = () => {
      for (let i = 0; i < 10; i++) {
        titles.push(
          $("tr [headers=t2]")
            .eq(i)
            .text()
        );
      }
    };

    const setAuthors = () => {
      for (let i = 0; i < 10; i++) {
        authors.push(
          $("tr [headers=t3]")
            .eq(i)
            .text()
        );
      }
    };

    const setUris = () => {
      for (let i = 0; i < 10; i++) {
        uris.push(
          $("tr a")
            .eq(i)
            .attr("href")
        );
      }
    };

    let result = [];
    
    setDatas();
    setTitles();
    setAuthors();
    setUris();

    do {
      result.push({
        data: datas.shift(),
        titulo: titles.shift(),
        autores: authors.shift(),
        link: uris.shift()
      });
    } while (titles.length !== 0);

    return res.json(result);
  }
};
