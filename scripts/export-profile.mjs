// Emit portable public content for another site or a profile editor.
import * as career from '../profile/career.ts';
import { projects } from '../profile/projects.ts';
import { recommendations, recommendationsUrl } from '../profile/recommendations.ts';

const profile = { ...career, projects, recommendations, recommendationsUrl };
process.stdout.write(JSON.stringify(profile, null, 2) + '\n');
