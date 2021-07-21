var simplemaps_countrymap_mapdata={
  main_settings: {
   //General settings
    width: "800", //'700' or 'responsive'
    background_color: "#FFFFFF",
    background_transparent: "yes",
    border_color: "#ffffff",
    state_description: "",
    state_color: "#88A4BC",
    state_hover_color: "#aad8a4",
    state_url: "",
    border_size: 1.5,
    all_states_inactive: "no",
    all_states_zoomable: "yes",
    
    //Location defaults
    location_description: "Location description",
    location_url: "",
    location_color: "#FF0067",
    location_opacity: 0.8,
    location_hover_opacity: 1,
    location_size: 25,
    location_type: "square",
    location_image_source: "frog.png",
    location_border_color: "#FFFFFF",
    location_border: 2,
    location_hover_border: 2.5,
    all_locations_inactive: "no",
    all_locations_hidden: "no",
    
    //Label defaults
    label_color: "#d5ddec",
    label_hover_color: "#d5ddec",
    label_size: 22,
    label_font: "Arial",
    hide_labels: "no",
    hide_eastern_labels: "no",
   
    //Zoom settings
    zoom: "yes",
    manual_zoom: "no",
    back_image: "no",
    initial_back: "no",
    initial_zoom: "-1",
    initial_zoom_solo: "no",
    region_opacity: 1,
    region_hover_opacity: 0.6,
    zoom_out_incrementally: "yes",
    zoom_percentage: 0.99,
    zoom_time: 0.5,
    
    //Popup settings
    popup_color: "white",
    popup_opacity: 0.9,
    popup_shadow: 1,
    popup_corners: 5,
    popup_font: "12px/1.5 Verdana, Arial, Helvetica, sans-serif",
    popup_nocss: "no",
    
    //Advanced settings
    div: "map",
    auto_load: "yes",
    url_new_tab: "yes",
    images_directory: "default",
    fade_time: 0.1,
    link_text: "View website",
    popups: "hover",
    state_image_url: "",
    state_image_position: "",
    location_image_url: ""
  },
  state_specific: {
    MEX2706: {
      name: "Baja California",
      popups: "https://www.sonora.gob.mx",
      color: "#d83670",
      url: "https://hildab4.github.io/esencia-patrimonio/bc.pdf",
      image_url: "https://media-cdn.tripadvisor.com/media/photo-s/1c/7d/b8/c7/la-paz-mexico-photo-by.jpg"
    },
    MEX2707: {
      name: "Baja California Sur",
      color: "#ecb518",
      url: "https://hildab4.github.io/esencia-patrimonio/bcs.pdf",
      image_url: "https://funlifecrisis.com/wp-content/uploads/2018/07/15-top-things-to-do-in-baja-california.jpg"
    },
    MEX2708: {
      name: "Coahuila",
      color: "#b8c442",
      url: "https://hildab4.github.io/esencia-patrimonio/coahuila.pdf",
      image_url: "https://cdn.mexicodestinos.com/lugares/parque-nacional-los-novillos-coahuila-galeria-min.jpg"
    },
    MEX2709: {
      name: "Chihuahua",
      url: "https://hildab4.github.io/esencia-patrimonio/chihuahua.pdf",
      color: "#d83670",
      image_url: "https://i.pinimg.com/originals/0c/dc/93/0cdc935c1bad210125365a1d5b10e0d9.jpg"
    },
    MEX2710: {
      name: "Durango",
      color: "#15cdcd",
      url: "https://hildab4.github.io/esencia-patrimonio/durango.pdf",
      image_url: "https://www.gob.mx/cms/uploads/article/main_image/36534/Plaza_Armas_Durango.jpg"
    },
    MEX2711: {
      name: "Sinaloa",
      color: "#b8c442",
      url: "https://hildab4.github.io/esencia-patrimonio/sinaloa.pdf",
      image_url: "https://newsweekespanol.com/wp-content/uploads/2019/04/Group-546-e1556065094111.jpg"
    },
    MEX2712: {
      name: "Sonora",
      color: "#b8c442",
      url: "https://hildab4.github.io/esencia-patrimonio/sonora.pdf",
      image_url: "https://pbs.twimg.com/media/D3jnpXZWkAAusyU.jpg"
    },
    MEX2713: {
      name: "Zacatecas",
      color: "#15cdcd",
      url: "https://hildab4.github.io/esencia-patrimonio/zacatecas.pdf",
      image_url: "https://inmobiliare.com/himalaya/wp-content/uploads/2020/10/zacatecas_turismo_1-1024x684.jpg"
    },
    MEX2714: {
      name: "Nuevo León",
      color: "#d83670",
      url: "https://hildab4.github.io/esencia-patrimonio/nvl.pdf",
      image_url: "https://www.gob.mx/cms/uploads/article/main_image/80669/nuevo-leon-monterrey-mexico.jpg"
    },
    MEX2715: {
      name: "San Luis Potosí",
      color: "#ecb518",
      url: "https://hildab4.github.io/esencia-patrimonio/slp.pdf",
      image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Catedral_SLP_cielo.jpg/1200px-Catedral_SLP_cielo.jpg"
    },
    MEX2716: {
      name: "Tamaulipas",
      color: "#15cdcd",
      url: "https://hildab4.github.io/esencia-patrimonio/tamaulipas.pdf",
      image_url: "https://www.visit-mexico.mx/wp-content/uploads/2021/01/Tamaulipas-Cover-01.jpg"
    },
    MEX2717: {
      name: "Aguascalientes",
      color: "#d83670",
      url: "https://hildab4.github.io/esencia-patrimonio/aguas.pdf",
      image_url: "https://www.eluniversal.com.mx/sites/default/files/N-A15-EU280920-4_DrupalMainImagenVertical.var_1601268187.jpg"
    },
    MEX2718: {
      name: "Colima",
      color: "#d83670",
      url: "https://hildab4.github.io/esencia-patrimonio/colima.pdf",
      image_url: "https://www.mexicodesconocido.com.mx/wp-content/uploads/2018/09/colima.jpg"
    },
    MEX2719: {
      name: "Jalisco",
      color: "#15cdcd",
      url: "https://hildab4.github.io/esencia-patrimonio/jalisco.pdf",
      image_url: "https://topadventure.com/__export/1622162179676/sites/laverdad/img/2021/05/27/5_pueblos_imperdibles_de_los_altos_de_jalisco.jpg_1538342946.jpg"
    },
    MEX2720: {
      name: "Michoacán",
      color: "#d83670",
      url: "https://hildab4.github.io/esencia-patrimonio/michoacan.pdf",
      image_url: "https://malvatraveltomexico.com.mx/wp-content/uploads/2020/05/0-Portada.jpg"
    },
    MEX2721: {
      name: "Nayarit",
      color: "#ecb518",
      url: "https://hildab4.github.io/esencia-patrimonio/nayarit.pdf",
      image_url: "https://inmobiliare.com/himalaya/wp-content/uploads/2020/02/riviera-nayarit-one-only-mandarina-hoteles-de-lujo-turismo_2.jpg"
    },
    MEX2722: {
      name: "Campeche",
      color: "#ecb518",
      url: "https://hildab4.github.io/esencia-patrimonio/campeche.pdf",
      image_url: "https://www.hola.com/imagenes/viajes/20180301121047/campeche-top-buena-vida-mexico/0-545-766/campeche-plaza-catedral-t.jpg"
    },
    MEX2723: {
      name: "Oaxaca",
      url: "https://hildab4.github.io/esencia-patrimonio/oaxaca.pdf",
      color: "#15cdcd",
      image_url: "https://media.nomadicmatt.com/2021/oaxaca1.jpg"
    },
    MEX2724: {
      name: "Puebla",
      color: "#b8c442",
      url: "https://hildab4.github.io/esencia-patrimonio/puebla.pdf",
      image_url: "https://res.cloudinary.com/dsmafmqwi/image/upload/c_fill,f_auto,h_1280,q_auto/v1/virtualtrips/locations/jwk8lnk5lounn1ojfxap"
    },
    MEX2725: {
      name: "Tabasco",
      color: "#ecb518",
      url: "https://hildab4.github.io/esencia-patrimonio/tabasco.pdf",
      image_url: "https://www.elheraldodetabasco.com.mx/local/iy4ik7-carlos.jpg/ALTERNATES/LANDSCAPE_400/carlos.jpg"
    },
    MEX2726: {
      name: "Tlaxcala",
      color: "#b8c442",
      url: "https://hildab4.github.io/esencia-patrimonio/tlaxcala.pdf",
      image_url: "https://lh3.googleusercontent.com/proxy/gOGGGoDjvoAD9zvI5533zkeBpc30xy-GMX9i6jNewoRogZZ1Ne90xrHK0AOA7vN9jTqB3IvpzIXNASWd_SK0ONlFpU7ToibkGWKC1szAnReHRQD5so7EqlmkksMjzYhRFRQBz1WNwB72D36f"
    },
    MEX2727: {
      name: "Distrito Federal",
      color: "#ecb518",
      url: "https://hildab4.github.io/esencia-patrimonio/cdmx.pdf",
      image_url: "https://lonelyplanetes.cdnstatics2.com/sites/default/files/styles/max_1300x1300/public/fotos/mexico_ciudaddemexico_paseoreforma_angelindependencia_shutterstockrf_1066463744_aberu.go_shutterstock.jpg?itok=MjJFsqoK"
    },
    MEX2728: {
      name: "Guanajuato",
      color: "#ecb518",
      url: "https://hildab4.github.io/esencia-patrimonio/gto.pdf",
      image_url: "https://cdn.britannica.com/00/188200-050-1995DFEE/view-city-Guanajuato-foreground-Mexico-basilica.jpg"
    },
    MEX2729: {
      name: "Guerrero",
      color: "#d83670",
      url: "https://hildab4.github.io/esencia-patrimonio/guerrero.pdf",
      image_url: "https://realestatemarket.com.mx/images/2020/01-Enero/0701/guerrero_turismo_noticias_nacional_.jpg"
    },
    MEX2730: {
      name: "Hidalgo",
      color: "#15cdcd",
      url: "https://hildab4.github.io/esencia-patrimonio/hidalgo.pdf",
      image_url: "https://ychef.files.bbci.co.uk/live/624x351/p067619b.jpg"
    },
    MEX2731: {
      name: "México",
      color: "#b8c442",
      url: "https://hildab4.github.io/esencia-patrimonio/edomex.pdf",
      image_url: "https://www.unionedomex.mx/sites/default/files/styles/galeria/public/field/image/edomex.jpg?itok=e-Eg1wbv"
    },
    MEX2732: {
      name: "Morelos",
      color: "#d83670",
      url: "https://hildab4.github.io/esencia-patrimonio/morelos.pdf",
      image_url: "https://img.rezdy.com/PRODUCT_IMAGE/54415/Cuernavaca_Mexico_lg.jpg"
    },
    MEX2733: {
      name: "Querétaro",
      color: "#15cdcd",
      url: "https://hildab4.github.io/esencia-patrimonio/qro.pdf",
      image_url: "http://www.conexionmexico.com.mx/wp-content/uploads/2018/04/Vivir-en-QRO.jpg"
    },
    MEX2734: {
      name: "Veracruz",
      url: "https://hildab4.github.io/esencia-patrimonio/veracruz.pdf",
      color: "#ecb518",
      image_url: "https://palabrasclaras.mx/wp-content/uploads/2019/06/zocalo-veracruz-1068x720.jpg"
    },
    MEX2735: {
      name: "Chiapas",
      color: "#15cdcd",
      url: "https://hildab4.github.io/esencia-patrimonio/chiapas.pdf",
      image_url: "https://res.cloudinary.com/worldpackers/image/upload/c_fill,f_auto,q_auto,w_1024/v1/guides/article_cover/qjrpk8y82hjmprbjmdgv"
    },
    MEX2736: {
      name: "Quintana Roo",
      url: "https://hildab4.github.io/esencia-patrimonio/qroo.pdf",
      color: "#b8c442",
      image_url: "https://cdn-3.expansion.mx/f9/99/a80537104c4a82b0a94d93e398d2/cancun-quintana-roo.jpg"
    },
    MEX2737: {
      name: "Yucatán",
      color: "#b8c442",
      url: "https://hildab4.github.io/esencia-patrimonio/yucatan.pdf",
      image_url: "https://www.barcelo.com/pinandtravel/wp-content/uploads/2019/10/que-ver-peninsula-yucatan-1024x466.jpg"
    }
  },
  locations: {},
  labels: {},
  legend: {
    entries: []
  },
  regions: {}
};
