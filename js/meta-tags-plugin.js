module.exports = () => ({
  document: (document) =>
    document.head.innerHTML = `
    <!-- Primary Meta Tags -->
    <title>CRI.quest - A fun online multiplayer game!</title>
    <meta name="title" content="CRI.quest - A fun online multiplayer game!">
    <meta name="description" content="CRI.quest is an online multiplayer game. Compete against other internet users, or challenge your friends and family. Try to cri harder than everyone, but if you end up losing, don't be a crybaby!">

    <!-- Open Graph / Facebook -->
    <meta property="og:type" content="website">
    <meta property="og:url" content="https://cri.quest/">
    <meta property="og:title" content="CRI.quest - A fun online multiplayer game!">
    <meta property="og:description" content="CRI.quest is an online multiplayer game. Compete against other internet users, or challenge your friends and family. Try to cri harder than everyone, but if you end up losing, don't be a crybaby!">
    <meta property="og:image" content="cri.png">
    <meta property="og:image:alt" content="Cri, our lord and savior. All hail the cri, for he is gracing us with its existence." />
    <meta property="og:locale" content="en_US" />
    <meta property="og:site_name" content="CRI.quest" />

    <!-- Twitter -->
    <meta property="twitter:card" content="summary_large_image">
    <meta property="twitter:url" content="https://cri.quest/">
    <meta property="twitter:title" content="CRI.quest - A fun online multiplayer game!">
    <meta property="twitter:description" content="CRI.quest is an online multiplayer game. Compete against other internet users, or challenge your friends and family. Try to cri harder than everyone, but if you end up losing, don't be a crybaby!">
    <meta property="twitter:image" content="cri.png">

${document.head.innerHTML}`,
});
