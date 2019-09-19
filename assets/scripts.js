(function () {
    if (navigator.userAgent.match(/IEMobile\/10\.0/)) {
        var d = document, c = "appendChild", a = d.createElement("style");
        a[c](d.createTextNode("@-ms-viewport{width: auto!important}"));
        d.getElementsByTagName("head")[0][c](a);
    }
})();

(function (i, s, o, g, r, a, m) {
    i['GoogleAnalyticsObject'] = r; i[r] = i[r] || function () {
        (i[r].q = i[r].q || []).push(arguments);
    }, i[r].l = 1 * new Date(); a = s.createElement(o),
        m = s.getElementsByTagName(o)[0]; a.async = 1; a.src = g; m.parentNode.insertBefore(a, m);
})(window, document, 'script', '//www.google-analytics.com/analytics.js', 'ga');

ga('create', 'UA-43414424-1', 'service.gov.uk');
ga('set', 'anonymizeIp', true);

ga('set', 'dimension38', 'GGW');
ga('set', 'dimension39', '200');

ga('send', 'pageview');
ga('set', 'nonInteraction', true);

var countries = [
    'Adam street LTD',
    'Agent Marketing LTD ',
    'Aldaba LTD',
    'Alfresco Software LTD',
    'Alpine Consortium',
    'Annii Legal Services',
    'APM Group LTD',
    'Arcadis LLP',
    'Aristo Caters',
    'Arti Promotions LTD',
    'Ash House Consultancy LTD',
    'Assess',
    'Atkins LTD',
    'Autodesk LTD',
    'AVT Associates LTD',
    'Babcock 4S LTD',
    'Balls Brothers',
    'Bank of England, The',
    'Barkham Office Furniture LTD',
    'Barnet Mencap',
    'Baspcan',
    'Baxter Storey LTD',
    'BCS',
    'BDO',
    'BDP Media Group LTD',
    'Be Applied LTD',
    'Beagle Digital Consulting LTD',
    'Beckfoot Trust',
    'Beeline Travel',
    'Benugo LTD',
    'BGS International LTD',
    'BHCA Services',
    'Big Data Partnership LTD',
    'Big Lottery Fund',
    'BIS',
    'Blackberry Cottage LTD',
    'Blake Morgan',
    'Blue Sheep LTD',
    'BMG Research LTD',
    'Bright Tribe Trust',
    'Capgemini UK PLC',
    'Capita Business Services',
    'Cardinal Wiseman',
    'Cardinus ltd',
    'Catch 22',
    'CDS Group of Companies',
    'CESG',
    'Charities Trust',
    'Chiron Software LTD',
    'Coachindepth LTD',
    'Digi2all LTD',
    'Digital Results LTD',
    'Dods Group PLC',
    'DTZ Management Services LTD',
    'Early Intervention Foundation',
    'EDF Energy',
    'Eduserv',
    'EEC Trading LTD',
    'Entelis LTD',
    'Escafeld TLC',
    'Esri UK LTD',
    'Eventbrite INC',
    'Family Action',
    'FDM Grou LTD',
    'Fideliti LTD',
    'Fordway Solutions',
    'Future Leaders LTD',
    'Gartner UK LTD',
    'GHS Consultancy LLP',
    'Global Resourcing LTD',
    'Govern ED LTD',
    'Granicus',
    'Great Learners Trust',
    'Guild Services LTD',
    'Hacker House LTD',
    'Hands Free Computing LTD',
    'Hapstone LTD',
    'Harris Federation'
];

var element = document.querySelector('#tt-default');
var id = 'autocomplete-default';
accessibleAutocomplete({
    element: element,
    id: id,
    source: countries
});
