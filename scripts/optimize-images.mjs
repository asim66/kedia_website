import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const IMAGES_DIR = path.join(process.cwd(), 'public/images');
const BACKUP_DIR = path.join(process.cwd(), 'archive/raw_images');

const imageConfigs = [
  // Hero Slide 1 (LCP Candidate) - Desktop & Mobile
  {
    src: 'clinic_team_seated.webp',
    outputs: [
      { name: 'clinic_team_seated.webp', width: 1400, format: 'webp', quality: 80 },
      { name: 'clinic_team_seated.avif', width: 1400, format: 'avif', quality: 75 },
      { name: 'clinic_team_seated_mobile.webp', width: 750, format: 'webp', quality: 80 },
      { name: 'clinic_team_seated_mobile.avif', width: 750, format: 'avif', quality: 75 },
    ]
  },
  // Other Hero & Gallery Images (Desktop max width 1200)
  {
    src: 'clinic_reception.webp',
    outputs: [
      { name: 'clinic_reception.webp', width: 1200, format: 'webp', quality: 80 },
      { name: 'clinic_reception.avif', width: 1200, format: 'avif', quality: 75 },
    ]
  },
  {
    src: 'clinic_corridor.webp',
    outputs: [
      { name: 'clinic_corridor.webp', width: 1200, format: 'webp', quality: 80 },
      { name: 'clinic_corridor.avif', width: 1200, format: 'avif', quality: 75 },
    ]
  },
  {
    src: 'clinic_treatment.webp',
    outputs: [
      { name: 'clinic_treatment.webp', width: 1200, format: 'webp', quality: 80 },
      { name: 'clinic_treatment.avif', width: 1200, format: 'avif', quality: 75 },
    ]
  },
  {
    src: 'clinic_building.webp',
    outputs: [
      { name: 'clinic_building.webp', width: 1200, format: 'webp', quality: 80 },
      { name: 'clinic_building.avif', width: 1200, format: 'avif', quality: 75 },
    ]
  },
  {
    src: 'clinic_lounge.webp',
    outputs: [
      { name: 'clinic_lounge.webp', width: 1200, format: 'webp', quality: 80 },
      { name: 'clinic_lounge.avif', width: 1200, format: 'avif', quality: 75 },
    ]
  },
  {
    src: 'clinic_team_standing.webp',
    outputs: [
      { name: 'clinic_team_standing.webp', width: 1200, format: 'webp', quality: 80 },
      { name: 'clinic_team_standing.avif', width: 1200, format: 'avif', quality: 75 },
    ]
  },
  // Doctor Portraits (Max width 800)
  {
    src: 'dr_kedia.webp',
    outputs: [
      { name: 'dr_kedia.webp', width: 800, format: 'webp', quality: 82 },
      { name: 'dr_kedia.avif', width: 800, format: 'avif', quality: 78 },
    ]
  },
  {
    src: 'dr_kedia_office.webp',
    outputs: [
      { name: 'dr_kedia_office.webp', width: 800, format: 'webp', quality: 82 },
      { name: 'dr_kedia_office.avif', width: 800, format: 'avif', quality: 78 },
    ]
  },
  // Team grid doctors (Max width 600)
  {
    src: 'dr_swetali_hd.webp',
    outputs: [
      { name: 'dr_swetali_hd.webp', width: 600, format: 'webp', quality: 82 },
      { name: 'dr_swetali_hd.avif', width: 600, format: 'avif', quality: 78 },
    ]
  },
  {
    src: 'dr_ayushi_hd.webp',
    outputs: [
      { name: 'dr_ayushi_hd.webp', width: 600, format: 'webp', quality: 82 },
      { name: 'dr_ayushi_hd.avif', width: 600, format: 'avif', quality: 78 },
    ]
  },
  {
    src: 'dr_anwesha_hd.webp',
    outputs: [
      { name: 'dr_anwesha_hd.webp', width: 600, format: 'webp', quality: 82 },
      { name: 'dr_anwesha_hd.avif', width: 600, format: 'avif', quality: 78 },
    ]
  },
  {
    src: 'dr_shibani_hd.webp',
    outputs: [
      { name: 'dr_shibani_hd.webp', width: 600, format: 'webp', quality: 82 },
      { name: 'dr_shibani_hd.avif', width: 600, format: 'avif', quality: 78 },
    ]
  },
  {
    src: 'dr_vandana_hd.webp',
    outputs: [
      { name: 'dr_vandana_hd.webp', width: 600, format: 'webp', quality: 82 },
      { name: 'dr_vandana_hd.avif', width: 600, format: 'avif', quality: 78 },
    ]
  },
  // Treatment Before & After Showcase Cases
  {
    src: 'treatment_metal_free_bridge_before.webp',
    outputs: [
      { name: 'treatment_metal_free_bridge_before.webp', width: 800, format: 'webp', quality: 80 },
      { name: 'treatment_metal_free_bridge_before.avif', width: 800, format: 'avif', quality: 75 },
    ]
  },
  {
    src: 'treatment_metal_free_bridge_after.webp',
    outputs: [
      { name: 'treatment_metal_free_bridge_after.webp', width: 800, format: 'webp', quality: 80 },
      { name: 'treatment_metal_free_bridge_after.avif', width: 800, format: 'avif', quality: 75 },
    ]
  },
  {
    src: 'treatment_anterior_crown_before.webp',
    outputs: [
      { name: 'treatment_anterior_crown_before.webp', width: 800, format: 'webp', quality: 80 },
      { name: 'treatment_anterior_crown_before.avif', width: 800, format: 'avif', quality: 75 },
    ]
  },
  {
    src: 'treatment_anterior_crown_after.webp',
    outputs: [
      { name: 'treatment_anterior_crown_after.webp', width: 800, format: 'webp', quality: 80 },
      { name: 'treatment_anterior_crown_after.avif', width: 800, format: 'avif', quality: 75 },
    ]
  },
  {
    src: 'treatment_teeth_whitening_before.webp',
    outputs: [
      { name: 'treatment_teeth_whitening_before.webp', width: 800, format: 'webp', quality: 80 },
      { name: 'treatment_teeth_whitening_before.avif', width: 800, format: 'avif', quality: 75 },
    ]
  },
  {
    src: 'treatment_teeth_whitening_after.webp',
    outputs: [
      { name: 'treatment_teeth_whitening_after.webp', width: 800, format: 'webp', quality: 80 },
      { name: 'treatment_teeth_whitening_after.avif', width: 800, format: 'avif', quality: 75 },
    ]
  },
  {
    src: 'treatment_crown_lengthening_before.webp',
    outputs: [
      { name: 'treatment_crown_lengthening_before.webp', width: 800, format: 'webp', quality: 80 },
      { name: 'treatment_crown_lengthening_before.avif', width: 800, format: 'avif', quality: 75 },
    ]
  },
  {
    src: 'treatment_crown_lengthening_after.webp',
    outputs: [
      { name: 'treatment_crown_lengthening_after.webp', width: 800, format: 'webp', quality: 80 },
      { name: 'treatment_crown_lengthening_after.avif', width: 800, format: 'avif', quality: 75 },
    ]
  },
];

async function run() {
  console.log('--- Starting Image Optimization Pipeline ---');
  let totalSavedBytes = 0;

  for (const config of imageConfigs) {
    const inputPath = path.join(BACKUP_DIR, config.src);
    if (!fs.existsSync(inputPath)) {
      console.warn(`Source image not found: ${inputPath}`);
      continue;
    }

    const originalStats = fs.statSync(inputPath);
    console.log(`Processing: ${config.src} (Original: ${(originalStats.size / 1024).toFixed(1)} KB)`);

    for (const out of config.outputs) {
      const outputPath = path.join(IMAGES_DIR, out.name);
      const tempPath = outputPath + '.tmp';

      let transform = sharp(inputPath).resize({
        width: out.width,
        withoutEnlargement: true,
      });

      if (out.format === 'avif') {
        transform = transform.avif({ quality: out.quality, effort: 6 });
      } else {
        transform = transform.webp({ quality: out.quality, effort: 6 });
      }

      await transform.toFile(tempPath);
      fs.renameSync(tempPath, outputPath);

      const newStats = fs.statSync(outputPath);
      const saved = originalStats.size - newStats.size;
      if (out.name === config.src) {
        totalSavedBytes += saved;
      }
      console.log(`  -> ${out.name.padEnd(38)}: ${(newStats.size / 1024).toFixed(1)} KB (Saved: ${(saved / 1024).toFixed(1)} KB)`);
    }
  }

  console.log(`\nOptimization Complete! Total Savings on WebP assets: ${(totalSavedBytes / 1024).toFixed(1)} KB`);
}

run().catch((err) => {
  console.error('Error optimizing images:', err);
  process.exit(1);
});
