import express from 'express';

const router = new express.Router();

import { getBoroughs } from './database.js';


/**
 * Déclaration des routes de l'app
 */

router.get("/", getHome);

/**
 * Déclaration des controlleurs de l'app
 */

/**
 * GET /
 * Page d'accueil
 */
async function getHome(req, res) {
  const boroughs = await getBoroughs() ;

  res.render('index', { boroughs });
}

// Exporte le routeur pour le fichier principal

export default router;