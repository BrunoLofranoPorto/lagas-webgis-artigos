var map = L.map('map', {
    center: [14.89, 64.12],
    zoom: 2
})
var osm = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © OpenStreetMap contributors',
maxZoom: 19
}).addTo(map);

const data = [
    {"title": 'As dimensões do ensino de Geografia da Saúde no Brasil', "author": 'Porto, Gurgel e Catão', "accessLink": 'https://estrabao.press/ojs8/index.php/estrabao/article/view/27', "year": '2022', "lat": -27.080065, "lng": -50.670227, "journal": 'Estrabão'},
    {"title": 'Cobertura vacinal da poliomelite na região Nordeste do Brasil no primeiro ano de pandemia por Covid-19', "author": 'Santana, Braz, Vital e Gurgel', "accessLink": 'https://estrabao.press/ojs8/index.php/estrabao/article/view/29', "year": '2022', "lat": -9.109872, "lng": -42.603078, "journal": 'Estrabão'},
    {"title": 'Viral metagenomics in nasopharyngeal swabs of Brazilian patients negative for SARS-CoV-2 unveils the presence of Chikungunya virus infection', "author": 'Quintão, Slavov, Oliveira, Bezerra, Cassemiro, Alves, Gontijo, Martins, Gurgel, Noronha, Ramalho, Araújo, Pereira, Haddad', "accessLink": 'https://www.journalofinfection.com/article/S0163-4453(21)00585-5/fulltext#seccesectitle0004', "year": '2021', "lat": -15.782458, "lng": -47.892158, "journal": 'Journal of Infection'},
    {"title": 'Migração e Saúde: inter-relações, legislação e acesso', "author": 'Belle, Matos e Gurgel', "accessLink": 'https://www.researchgate.net/publication/352466471_Migracao_e_Saude_inter-relacoes_legislacao_e_acesso', "year": '2021', "lat": -15.782458, "lng": -47.892158, "journal": 'Tempus Actas de Saúde Coletiva'},
    {"title": 'Dynamics of COVID-19 outcomes is driven by political landscape and socio-economic factors at local level in Brazil', "author": 'Xavier, Lima e Silva, Lara, Rocha e Silva, Oliveira, Gurgel, Barcellos', "accessLink": 'https://papers.ssrn.com/sol3/papers.cfm?abstract_id=3949486', "year": '2021', "lat": -12.273171, "lng": -51.916263, "journal": 'SSRN Electronic Journal'},
    {"title": 'Toward an early warning system for health issues related to particulate matter exposure in Brazil: The feasibility of using global PM2.5 concentration forecast products.', "author": 'Roux, Ignotti, Bègue, Bencherif, Catry, Dessay, Gracie, Gurgel, Hacon, Magalhães, Miguel, Monteiro, Révillion, Antunes, Villela, Xavier e Barcellos', "accessLink": 'https://www.researchgate.net/publication/346988068_Toward_an_Early_Warning_System_for_Health_Issues_Related_to_Particulate_Matter_Exposure_in_Brazil_The_Feasibility_of_Using_Global_PM25_Concentration_Forecast_Products', "year": '2020', "lat": -12.273171, "lng": -51.916263, "journal": 'Remote Sensing'},
    {"title": 'Avaliação da Efetividade em Unidades de Conservação: Um Estudo de Caso no Estado do Maranhão, Brasil. ', "author": 'Anderson, Gurgel, Laques e Carvalho', "accessLink": 'https://www.researchgate.net/publication/348346208_AVALIACAO_DA_EFETIVIDADE_EM_UNIDADES_DE_CONSERVACAO_UM_ESTUDO_DE_CASO_NO_ESTADO_DO_MARANHAO_BRASIL', "year": '2020', "lat": -4.613585, "lng": -45.641963, "journal": 'Tamoios'},
    {"title": 'Covid-19 na Região Integrada de Desenvolvimento do Distrito Federal e Entorno (RIDE): Distribuição Espacial e Medidas Sanitárias de Contingência', "author": 'Silva, Miranda, Bezerra, Matos e Gurgel', "accessLink": 'http://www.seer.ufu.br/index.php/hygeia/article/view/54621', "year": '2020', "lat": -15.431072, "lng": -47.883669, "journal": 'Hygeia - Revista Brasileira de Geografia Médica e da Saúde'},
    {"title": 'Management of Pirarucu (Arapaima gigas, Teleostei, Osteoglossidae) in Sustainable Use Units as a proposal for the restoration of aquatic ecosystems', "author": 'Santana, Oliveira, Balbino e Gurgel', "accessLink": 'https://www.scielo.br/j/alb/a/5j8FQ4r7js3Wfw54HLmF8tn/abstract/?lang=en', "year": '2020', "lat": -1.669254, "lng": -62.658332, "journal": 'ACTA LIMNOLOGICA BRASILIENSIA (ONLINE)'},
    {"title": 'Semi-Supervised Text Classification Framework: An Overview of Dengue Landscape Factors and Satellite Earth Observation', "author": 'Li, Gurgel, Dessay, Hu, Xu e Gong', "accessLink": 'https://www.mdpi.com/1660-4601/17/12/4509', "year": '2020', "lat": -15.782458, "lng": -47.892158, "journal": 'nternational Journal of Environmental Research and Public Health'},
    {"title": 'Dinâmica espaço-temporal da dengue no Distrito Federal, Brasil: ocorrência e permanência de epidemias', "author": 'Drumond, Ângelo, Xavier, Catão, Gurgel e Barcellos', "accessLink": 'https://www.scielo.br/j/csc/a/HSsykFprmPrKBKP8cjnLtKx/?lang=pt', "year": '2020', "lat": -15.782458, "lng": -47.892158, "journal": 'Ciência & Saúde Coletiva'},
    {"title": 'Dengue Surveillance System in Brazil: A Qualitative Study in the Federal District', "author": 'Ângelo, Ramalho, Gurgel, Belle e Pilot', "accessLink": 'https://www.mdpi.com/1660-4601/17/6/2062', "year": '2020', "lat": -15.782458, "lng": -47.892158, "journal": ' International Journal of Environmental Research and Public Health'},
    {"title": 'A Mapping Review on Urban Landscape Factors of Dengue Retrieved from Earth Observation Data, GIS Techniques, and Survey Questionnaires', "author": 'Marti, Catry, Roux, Mangeas, Hanschumacher, Gaudart, Tran, Demagistri, Faure, Carvajal, José, Drumond, Xu, Herbreteau, Gurgel, Dessay e Gong', "accessLink": 'https://www.mdpi.com/2072-4292/12/6/932', "year": '2020', "lat": -15.782458, "lng": -47.892158, "journal": 'Remote Sensing'},
    {"title": 'Continuous Monitoring of the Spatio-Temporal Patterns of Surface Water in Response to Land Use and Land Cover Types in a Mediterranean Lagoon Complex', "author": 'Li, Feng, Dessay, Delaitre, Gurgel e Gong', "accessLink": 'https://www.mdpi.com/2072-4292/11/12/1425', "year": '2019', "lat": 43.098468, "lng": 3.006517, "journal": 'Remote Sensing'},
    {"title": 'Use of spatial autocorrelation and time series Landsat images for long-term monitoring of surface water shrinkage and expansion in Guanting Reservoir, China', "author": 'Li, Feng, Gurgel, Xu, Dessay e Gong', "accessLink": 'https://www.tandfonline.com/doi/abs/10.1080/2150704X.2019.1671634', "year": '2019', "lat": 40.346220, "lng": 115.741325, "journal":'Remote Sensing Letters'},
    {"title": 'Dossiê Temático sobre aplicações em geografia, saúde e meio ambiente', "author": 'Helen Gurgel e Anne-Elizabeth Laques', "accessLink": 'https://journals.openedition.org/confins/22814', "year": '2019', "lat": 48.861410, "lng": 2.351763, "journal": 'Confins'},
    {"title": 'Dossier thématique sur des exemples d’applications en géographie, santé et environnement', "author": 'Helen Gurgel e Anne-Elizabeth Laques', "accessLink": 'https://journals.openedition.org/confins/22814', "year": '2019', "lat": 48.861410, "lng": 2.351763, "journal": 'Confins'},
    {"title": 'Estimativa populacional pelo modelo people in pixel aplicado ao estudo da dengue no Distrito Federal-Brasil', "author": 'Gregorio, Gurgel, Dessay, Sousa e Roux', "accessLink": 'https://journals.openedition.org/confins/22922', "year": '2019', "lat": -15.782458, "lng": -47.892158, "journal": 'Confins'},
    {"title": 'Saúde e desastres no Brasil: uma reflexão sobre os aspectos envolvidos em eventos hidrológicos e rompimento de barragens', "author": 'Silva, Gurgel e Freitas', "accessLink": 'https://journals.openedition.org/confins/23114', "year": '2019', "lat": -20.141065, "lng": -44.201312, "journal": 'Confins'},
    {"title": 'Análise dos padrões espaço-temporais das internações por diarreia e do clima nas capitais brasileiras', "author": 'Fuckner, Carvalho Jr., Gurgel, Barcellos, Durieux', "accessLink": 'https://journals.openedition.org/confins/23297', "year": '2019', "lat": -15.782458, "lng": -47.892158, "journal": 'Confins'},
    {"title": 'Avaliação da efetividade de áreas protegidas: conceitos, métodos e desafios', "author": 'Masulo, Gurgel e Laques', "accessLink": 'https://periodicos.uff.br/geographia/article/view/14396', "year": '2019', "lat": -22.920373, "lng": -43.231246, "journal": 'GEOgraphia (Revista UFF)'},
    {"title": 'Métodos para avaliação da efetividade de áreas protegidas: conceitos, aplicações e limitações', "author": 'Masulo, Gurgel e Laques', "accessLink": 'http://cegot.org/ojs/index.php/GOT/article/view/2019.16.009/pdf', "year": '2019', "lat": -15.782458, "lng": -47.892158, "journal": 'Revista de Geografia e Ordenamento do Território'},
    {"title": 'Wetlands and Malaria in the Amazon: Guidelines for the Use of Synthetic Aperture Radar Remote-Sensing', "author": 'Catry, Roux, Herbreteau, Gurgel, Mangeas, Seyler e Dessay', "accessLink": 'https://www.mdpi.com/1660-4601/15/3/468', "year": '2018', "lat": -2.918574, "lng": -65.876549, "journal": ' International Journal of Environmental Research and Public Health'},
    {"title": 'O passado e o presente das unidades de conservação do Maranhão, Brasil', "author": 'Masullo, Gurgel e Laques', "accessLink": 'https://seer.ufu.br/index.php/caminhosdegeografia/article/view/39315', "year": '2018', "lat": -4.592103, "lng": -45.620405, "journal": 'Caminhos de Geografia'},
    {"title": 'Dinâmica Socioeconômica das Unidades de Conservação do Maranhão', "author": 'Masullo, Gurgel, Laques e Carvalho', "accessLink": 'https://journals.openedition.org/confins/16763', "year": '2018', "lat": -4.592103, "lng": -45.620405, "journal": 'Confins'},
    {"title": 'Apports de la combinaison d’images satellites optique et RADAR dans l’étude des maladies à transmission vectorielle : cas du paludisme à la frontière Guyane française – Brésil', "author": 'Catry, Pottier, Marti, Li, Roux, Herbretreau, Mangeas, Demagistri, Gurgel e Dessay', "accessLink": 'https://journals.openedition.org/confins/15027', "year": '2018', "lat": 2.873159, "lng": -52.436475, "journal": 'Confins'},
    {"title": 'Sustentabilidade socioambiental e a saúde nos territórios (re)construídos por projetos hidrelétricos na Amazônia: o caso de Belo Monte', "author": 'Silveira, Neto, Gurgel e Durieux', "accessLink": 'https://journals.openedition.org/confins/15149', "year": '2018', "lat": -3.123545, "lng": -51.779384, "journal": 'Confins'},
    {"title": 'Dossier Géographie, santé et environnement : Une approche de la complexité des questionnements actuels en santé', "author": 'Helen Gurgel e Anne-Elizabeth Laques', "accessLink": 'https://journals.openedition.org/confins/15357', "year": '2018', "lat": 48.861410, "lng": 2.351763, "journal": 'Confins'},
    {"title": 'Dossiê Geografia, saúde e ambiente: Uma abordagem da complexidade dos problemas atuais na saúde.', "author": 'Helen Gurgel e Anne-Elizabeth Laques', "accessLink": 'https://journals.openedition.org/confins/15349', "year": '2018', "lat": 48.861410, "lng": 2.351763, "journal": 'Confins'},
    {"title": 'Índice de Controle Ambiental das Unidades de Conservação do Maranhão', "author": 'Masulo, Gurgel, Laques, Carvalho e Castro', "accessLink": 'https://www.revistas.usp.br/rdg/article/view/139602', "year": '2018', "lat": -4.613575, "lng": -45.620420, "journal": 'Revista do Departamento de Geografia (USP)'},
    {"title": 'Dinâmica da paisagem em planícies de inundação amazônicas: o caso do Lago Grande do Curuai, Pará, Brasil', "author": 'Peres, Gurgel e Laques', "accessLink": 'https://journals.openedition.org/confins/13010', "year": '2018', "lat": -2.187170, "lng": -55.337355, "journal": 'Confins'},
    {"title": '30 anos de dinâmica espaço-temporal (1984-2015) da região de influência do Parque Nacional da Chapada dos Veadeiros – Goiás', "author": 'Silva, Gurgel, Laques, Silveira e Siqueira', "accessLink": 'https://journals.openedition.org/confins/14851', "year": '2018', "lat": -14.038606, "lng": -47.622981, "journal": 'Confins'},
    {"title": 'Relações entre a dinâmica ambiental e a dengue no Distrito Federal, Brasil', "author": 'Siqueira, Gurgel, Silveira e Ramalho', "accessLink": 'http://www.seer.ufu.br/index.php/hygeia/article/view/39740', "year": '2017', "lat": -15.782458, "lng": -47.892158, "journal": 'Hygeia - Revista Brasileira de Geografia Médica e da Saúde'},
    {"title": 'Dinâmica espacial de nascidos vivos e óbitos infantis nas regiões de saúde do Distrito Federal em 2012', "author": 'Bezerra, Freire, Gurgel e Ramalho', "accessLink": 'http://www.seer.ufu.br/index.php/hygeia/article/view/39731', "year": '2017', "lat": -15.782458, "lng": -47.892158, "journal": 'Hygeia - Revista Brasileira de Geografia Médica e da Saúde'},
    {"title": 'Regionalization of a Landscape-Based Hazard Index of Malaria Transmission: An Example of the State of Amapá, Brazil', "author": 'Li, Catry, Dessay, Gurgel, Almeida, Barcellos e Roux', "accessLink": 'http://www.mdpi.com/2306-5729/2/4/37/pdf', "year": '2017', "lat": 1.711671, "lng": -52.040161, "journal": 'Data'},
    {"title": ' A Dengue: Contextos Temporal e Social no Distrito Federal', "author": 'Ramalho, Silveira, Catão, Bitar, Araújo e Gurgel', "accessLink": 'http://www.codeplan.df.gov.br/wp-content/uploads/2018/03/Bras%C3%ADlia-em-Debate-17.pdf', "year": '2017', "lat": -15.782458, "lng": -47.892158, "journal": 'Brasília em Debate'},
    {"title": 'Sistemas agrícolas e sistema de indicadores: avaliação do impacto das alterações climáticas sobre a segurança alimentar numa bacia de inundação da Amazônia', "author": 'Doyen, Laques, Gurgel e Peres', "accessLink": 'https://journals.openedition.org/confins/19151', "year": '2017', "lat": -2.187170, "lng": -55.337355, "journal": 'Confins'},
    {"title": 'Systèmes agricoles et système d’indicateurs: évaluation de limpact du changement climatique sur la sécurité alimentaire dans un bassin d’inondation amazonien', "author": 'Doyen, Laques, Gurgel e Peres', "accessLink": 'http://journals.openedition.org/confins/11828', "year": '2017', "lat": -2.187170, "lng": -55.337355, "journal": 'Confins'},
    {"title": 'Análise Sazonal da Vegetação do Cerrado por Meio de Dados do Sensor MODIS no Distrito Federal (Brasil)', "author": 'Souza, Gurgel e Mazzega', "accessLink": 'https://revistas.ufg.br/bgg/article/view/44555/22027', "year": '2016', "lat": -15.782458, "lng": -47.892158, "journal": 'Boletim Goiano de Geografia (Online)'},
    {"title": 'Análise espacial dos fatores associados à realização de cesariana no Distrito Federal em 2009', "author": 'Bezerra, M. Silva, A. Silva, Ramalho e Gurgel', "accessLink": 'http://www.lsie.unb.br/espacoegeografia/index.php/espacoegeografia/article/view/442/235', "year": '2015', "lat": -15.782458, "lng": -47.892158, "journal": 'Espaço e Geografia (UnB)'},
    {"title": 'Editorial - Geografia da Saúde', "author": 'Gurgel, Barcellos, Laques, Reis Jr. e Mota', "accessLink": 'http://www.lsie.unb.br/espacoegeografia/index.php/espacoegeografia/article/view/460/252', "year": '2015', "lat": -15.782458, "lng": -47.892158, "journal": 'Espaço e Geografia (UnB)'},
    {"title": 'Land cover, land use and malaria in the Amazon: a systematic literature review of studies using remotely sensed data', "author": 'Stefani, Dusfour, Corrêa, Cruz, Dessay, A. Galardo, C. Galardo, Girod, Gomes, Gurgel, Lima, Moreno, Musset, Nacher, Soares, Carme e Roux', "accessLink": 'https://malariajournal.biomedcentral.com/articles/10.1186/1475-2875-12-192', "year": '2013', "lat": -4.014793, "lng": -70.018043, "journal": 'Malaria Journal (Online)'},
    {"title": 'Água, saúde e territórios: uma breve discussão', "author": 'Gurgel, Billa e Mazzega', "accessLink": 'https://repositorio.unb.br/handle/10482/23639', "year": '2013', "lat": -15.782458, "lng": -47.892158, "journal": 'Paranoá'},
]
    
var markers = L.markerClusterGroup();

for (item of data) {
        var marker = L.marker([item.lat, item.lng])

        let text = `${item.title} <br> Por: ${item.author} <br> Publicado em: ${item.journal}, ${item.year} <br> Para acessar <a href="${item.accessLink}">clique aqui!</a>`

        marker.bindPopup(text)

        markers.addLayer(marker)
    }

map.addLayer(markers)

/*
// template for the items in the data variable
{"title": '', "author": '', "accessLink": '', "year": '', "lat": null, "lng": null, "journal": ''},
*/

var info = L.control();

info.onAdd = function (map) {
    this._div = L.DomUtil.create('div', 'info'); // create a div with a class "info"
    this.update();
    return this._div;
};

info.update = function (props) {
    this._div.innerHTML = '<h1>Distribuição espacial das <br><br> publicações de <br><br> artigos em periódicos <br><br> por membros do LAGAS</h1>';
};

info.addTo(map)

var logo = L.control();

logo.onAdd = function (map) {
    this._div = L.DomUtil.create('div', 'logo'); // create a div with a class "logo"
    this.update();
    return this._div;
};

logo.update = function (props) {
    this._div.innerHTML = '<a href="http://lagas.unb.br/"><img src="images/lagasLogo.png" alt="logo do laboratório lagas"></a>';
};

logo.addTo(map)
logo.setPosition('bottomright')