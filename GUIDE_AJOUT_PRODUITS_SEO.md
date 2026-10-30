# DisFly – 6 nouveaux produits et mise à jour SEO

Mise à jour préparée le 30 octobre 2026. Catalogue de 98 à 104 références.

## Déploiement

**Option 1 :** utilisez `disfly_site_complet_104_produits.zip` et publiez le contenu du dossier `disfly-main` à la racine de votre site statique / dépôt GitHub Pages.

**Option 2 :** utilisez `disfly_modifications_6_produits_SEO.zip` et remplacez/ajoutez les fichiers du sous-dossier `disfly-main` dans le dossier actuel du site. Conservez le reste du site. Ne téléversez pas le dossier parent `disfly-main` à l'intérieur de la racine déjà existante du site.

Le catalogue est un site statique : `products-seo.json` est une liste de référence, mais **ne suffit pas à afficher les nouveaux produits**. Il faut aussi publier les pages HTML, images, pages catégories et sitemap inclus dans les archives.

## Nouveaux produits

| Produit | Format publié | Fiche |
|---|---|---|
| Fini Sour Jelly Beans | 12 sachets de 90 g | produit-fini-sour-jelly-beans-sachet-12-90g.html |
| Fini Bisous Fraise | 12 sachets de 90 g | produit-fini-bisous-fraise-sachet-12-90g.html |
| Fini Jelly Bananas | 12 sachets de 90 g | produit-fini-jelly-bananas-sachet-12-90g.html |
| Skøll Original Vodka Agrumes | Canette 50 cl, 6 % vol. | produit-skoll-original-vodka-agrumes-canette-50cl.html |
| Minute Maid Nectar de Pomme | 24 canettes de 33 cl | produit-minute-maid-nectar-pomme-pack-24-33cl.html |
| Schweppes Indian Tonic | 24 canettes de 33 cl | produit-schweppes-indian-tonic-pack-24-33cl.html |

Les formats Fini, Minute Maid, Schweppes et Skøll ont été recoupés avec des références distributeurs. **Le nombre de canettes par carton Skøll n'a pas été confirmé** : la fiche affiche volontairement « Canette 50cl » et « Conditionnement carton : sur devis ». À modifier seulement si le colisage réel est confirmé.

## SEO et navigation réalisés

- 6 fiches produit, avec H1 et title uniques, descriptions B2B, canonicals, Open Graph, Twitter cards et `Product` JSON-LD (sans prix ni stock inventés).
- Six images WebP avec noms explicites et textes alternatifs pertinents.
- Maillage interne : 3 confiseries dans Fini/Confiseries, Skøll dans Bières, Minute Maid Pomme dans Sodas/Minute Maid, Schweppes Indian Tonic dans Sodas/Schweppes.
- Une page de marque `grossiste-minute-maid.html` pour les deux nectars.
- Sommaires et décomptes corrigés : catalogue 104, Fini 14, Confiseries 14, Bières 13, Sodas 37, Schweppes 4, Minute Maid 2.
- `products-seo.json`, `marques.html`, `index.html` et `sitemap.xml` actualisés.
- Un balisage `BreadcrumbList` sur les nouvelles fiches et `ItemList` sur le catalogue et les pages concernées.

### Après publication

Ouvrir les six fiches sur https://www.disfly.fr/, vérifier les visuels et les liens. Contrôler que `https://www.disfly.fr/sitemap.xml` est bien public, puis demander une nouvelle exploration dans Google Search Console. Le référencement n'est pas instantané et la présence dans Google n'est pas garantie.

## Fichiers existants modifiés

- `catalogue.html`
- `grossiste-bieres.html`
- `grossiste-confiseries.html`
- `grossiste-fini.html`
- `grossiste-schweppes.html`
- `grossiste-sodas.html`
- `index.html`
- `marques.html`
- `products-seo.json`
- `produit-minute-maid-orange-pack-24-33cl.html`
- `sitemap.xml`

## Fichiers ajoutés

- `fini-bisous-fraise.webp`
- `fini-jelly-bananas.webp`
- `fini-sour-jelly-beans.webp`
- `grossiste-minute-maid.html`
- `minute-maid-nectar-pomme-33cl.webp`
- `produit-fini-bisous-fraise-sachet-12-90g.html`
- `produit-fini-jelly-bananas-sachet-12-90g.html`
- `produit-fini-sour-jelly-beans-sachet-12-90g.html`
- `produit-minute-maid-nectar-pomme-pack-24-33cl.html`
- `produit-schweppes-indian-tonic-pack-24-33cl.html`
- `produit-skoll-original-vodka-agrumes-canette-50cl.html`
- `schweppes-indian-tonic-33cl.webp`
- `skoll-original-vodka-agrumes-50cl.webp`
