export const siteOrigin = 'https://zlendo-realty-fr-demo.vabsit2020.chatgpt.site';

export function localizeMorocco(page, french) {
  page = page.replace(/<div class="review">.*?<\/div>/, '');
  if (!french) return page.replace('Versión privada para revisión y pruebas. La campaña de España aún no se ha lanzado.', 'Solicite una demo para evaluar su proyecto y sus necesidades de integración.');
  const replacements = new Map([
    ['Zlendo Realty — Du plan 2D à la présentation 3D', 'API 2D vers 3D pour architectes au Maroc | Zlendo Realty'],
    ['POUR LES ARCHITECTES & LES CONSTRUCTEURS', 'POUR LES ARCHITECTES & LES CONSTRUCTEURS AU MAROC'],
    ['MAROC · MAURICE', 'MAROC · CASABLANCA · RABAT · MARRAKECH · TANGER'],
    ['Pour les petits cabinets d’architecture, les studios de design d’intérieur et les constructeurs qui présentent un projet résidentiel à leurs clients.', 'Pour les cabinets d’architecture, les studios de design d’intérieur et les constructeurs au Maroc qui présentent une villa, un appartement ou un projet résidentiel à leurs clients.'],
    ['Cette campagne se concentre sur ce seul parcours.', 'Explorez ce parcours sur un projet représentatif de votre activité.'],
    ['Capture du centre d’aide Zlendo Realty · disponibilité via API à confirmer.', 'Captures du centre d’aide Zlendo Realty. Découvrez les fonctions adaptées à votre intégration pendant la démo.'],
    ['TROIS BÉNÉFICES À DÉMONTRER', 'CE QUE VOUS POURREZ ÉVALUER'],
    ['Accès illimité annoncé pour le forfait annuel.', 'Plans et vues 2D / 3D en illimité dans le forfait annuel.'],
    ['Incluse dans le forfait annoncé.', 'Incluse dans le forfait annuel.'],
    ['Les fonctionnalités et performances détaillées restent soumises à validation du fondateur.', 'Présentez vos outils et vos fichiers lors de la démo : nous préciserons les formats compatibles, les fonctions accessibles via API et les conditions d’intégration.'],
    ['Plans, vues 2D / 3D, visite à 360° et inspiration par IA annoncés en illimité.', 'Plans, vues 2D / 3D, visite à 360° et inspiration par IA en illimité.'],
    ['Taxes, tarifs d’usage et périmètre API à confirmer.', 'Le devis précise les taxes, les frais d’usage et le périmètre API adapté à votre projet.'],
    ['Les conditions d’essai, la durée et les quotas seront précisés par l’équipe. Aucun essai gratuit n’est annoncé à ce stade.', 'Demandez une évaluation sur un plan représentatif. L’équipe vous précisera sa durée, son périmètre et ses conditions tarifaires.'],
    ['Aux cabinets d’architecture, studios de design d’intérieur et constructeurs au Maroc et à Maurice. Le cas d’usage retenu est la préparation de présentations clients.', 'Aux cabinets d’architecture, studios de design d’intérieur et constructeurs au Maroc. Le parcours proposé : préparer une présentation 3D à partir d’un plan 2D. Les demandes depuis Maurice restent également les bienvenues.'],
    ['Cette version privée est destinée à la revue et aux tests de la campagne.', 'Indiquez votre ville, vos outils et le type de projet à présenter. Nous pourrons définir ensemble une démonstration et les prochaines étapes.'],
  ]);
  for (const [before, after] of replacements) page = page.replaceAll(before, after);
  page = page.replace('<html lang="fr">', '<html lang="fr-MA">');
  page = page.replace('<meta name="robots" content="noindex,nofollow">', '<meta name="robots" content="index,follow">');
  page = page.replace(/<meta name="description" content="[^"]*">/, '<meta name="description" content="Architectes et constructeurs au Maroc : explorez l’API Zlendo Realty pour passer du plan 2D à la présentation 3D. Demandez une démonstration en direct.">');
  page = page.replace('</head>', `<link rel="canonical" href="${siteOrigin}/"><meta property="og:type" content="website"><meta property="og:locale" content="fr_MA"><meta property="og:title" content="Du plan 2D à la présentation 3D — Zlendo Realty Maroc"><meta property="og:description" content="Une API pour explorer vos projets en 3D. Architectes et constructeurs au Maroc : demandez une démo en direct."><meta property="og:url" content="${siteOrigin}/"></head>`);
  page = page.replace('data-currency="INR" aria-pressed="true"', 'data-currency="INR" aria-pressed="false"')
    .replace('data-currency="MAD" aria-pressed="false"', 'data-currency="MAD" aria-pressed="true"')
    .replace('<span id="price-value">28 899</span><span id="price-unit"> INR</span>', '<span id="price-value">2 987</span><span id="price-unit"> MAD</span>')
    .replace('<p id="currency-caption">Tarif annuel', '<p id="currency-caption">≈ Équivalent indicatif. Tarif annuel');
  page = page.replace('<option value="0">Maroc</option>', '<option value="0" selected>Maroc</option>');
  page = page.replace('<label class="wide">Votre projet et vos outils actuels', '<label>Ville (facultatif)<input name="city" autocomplete="address-level2" maxlength="100" placeholder="Casablanca, Rabat…"></label><label>Téléphone (facultatif)<input name="phone" type="tel" autocomplete="tel" maxlength="40" placeholder="+212…"></label><label class="wide">Votre projet et vos outils actuels');
  page = page.replace('Ex. : présentation d’une villa, préparation du plan avec mon outil actuel, rendu souhaité…', 'Ex. : cabinet à Casablanca, présentation d’une villa, logiciel actuel, vues 3D attendues…');
  page = page.replace('Vos coordonnées et votre demande sont enregistrées pour traiter cet échange.', 'Vos coordonnées et votre demande sont enregistrées pour organiser cette démonstration. La ville et le téléphone sont facultatifs.');
  page = page.replace('<section class="contact"', `<section class="morocco-demo wrap" aria-labelledby="morocco-demo-title"><div><p class="eyebrow">VOTRE DÉMO, SUR UN CAS CONCRET</p><h2 id="morocco-demo-title">Un plan. Un projet.<br>Une décision éclairée.</h2><p>Préparez une présentation client de villa ou d’appartement, puis évaluez le parcours avec votre équipe.</p></div><ol><li><strong>Décrivez votre besoin</strong><span>Votre ville, votre métier, vos outils et le nombre de projets à présenter.</span></li><li><strong>Examinez le parcours en direct</strong><span>Plan 2D, vues 3D, visite à 360° : vérifiez les résultats et les fonctions utiles à votre activité.</span></li><li><strong>Définissez une évaluation</strong><span>Un plan que vous êtes autorisé à utiliser, des résultats attendus et un devis précisant les frais applicables.</span></li></ol></section><section class="contact"`);
  page = page.replace('Indiquez votre ville, vos outils et le type de projet à présenter. Nous pourrons définir ensemble une démonstration et les prochaines étapes.</p>', 'Indiquez votre ville, vos outils et le type de projet à présenter. Nous pourrons définir ensemble une démonstration et les prochaines étapes.</p><p class="direct-contact">Contact direct : <a href="mailto:support@zlendorealty.com?subject=Demande%20de%20d%C3%A9mo%20-%20Maroc">support@zlendorealty.com</a></p>');
  page = page.replace('</style>', '.morocco-demo{display:grid;grid-template-columns:1fr 1fr;gap:90px;padding-top:80px;padding-bottom:80px}.morocco-demo h2{font-size:44px}.morocco-demo p{color:var(--muted);line-height:1.7}.morocco-demo ol{margin:0;padding-left:24px}.morocco-demo li{padding:14px 0 20px 10px;border-bottom:1px solid #d7ddd0}.morocco-demo strong,.morocco-demo span{display:block}.morocco-demo span{font-size:13px;line-height:1.7;color:var(--muted);margin-top:8px}.direct-contact{font-size:13px;margin-top:24px;overflow-wrap:anywhere}.direct-contact a{color:var(--teal)}@media(max-width:760px){.morocco-demo{grid-template-columns:1fr;gap:25px;padding:55px 24px}.morocco-demo h2{font-size:36px}} </style>');
  return page;
}
