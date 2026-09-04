import { PRESETS } from '../data/presets';

export interface FileItem {
  id: string;
  slug: string;
  title: string;
  path: string;
  content: string;
}

export interface TreeNode {
  name: string;
  displayName: string;
  type: 'folder' | 'file';
  id?: string;
  slug?: string;
  children?: TreeNode[];
}

export interface FeatureCard {
  icon: string;
  title: string;
  description: string;
}

export interface SyntaxCard {
  title: string;
  code: string;
}

export interface PresetOption {
  value: string;
  label: string;
}

export const FEATURE_CARDS: FeatureCard[] = [
  {
    icon: '🧩',
    title: 'Everything is head(args)',
    description: 'No statements or special forms. Arithmetic, conditionals, and control flow are function applications in disguise.'
  },
  {
    icon: '🎯',
    title: 'Specificity Clause Dispatch',
    description: 'Matches by pattern specificity (5 beats _int beats _), deterministic and order-independent.'
  },
  {
    icon: '⛓️',
    title: 'Pipes & Symbolic Rewriting',
    description: 'Thread values through |> with $ placeholders. Rewrite data using /. rules.'
  },
  {
    icon: '🛡️',
    title: 'Errors are Values',
    description: 'Failable operations return Err values composed through pipelines with catch and recover.'
  }
];

export const SYNTAX_CARDS: SyntaxCard[] = [
  {
    title: 'Pattern Matching & Specificity',
    code: `(* Specificity dispatch: specific beats general *)\nfactorial(0) := 1\nfactorial(n: _int) := n * factorial(n - 1)\n\nfactorial(5)  (* Evaluates to 120 *)`
  },
  {
    title: 'Pipes with $ Placeholders',
    code: `(* Subject lands in first position by default *)\n[1, 2, 3] |> fold(plus, 0)      (* 6 *)\n\n(* $ marks exact subject slot *)\n2 |> minus(10, $)               (* 8 *)`
  },
  {
    title: 'Python Extension API',
    code: `# Easily register Python functions as Minimatic heads\nfrom minimatic import register_head\n\n@register_head\ndef custom_transform(env, args):\n    return sum(args) * 2`
  }
];

export const PRESET_OPTIONS: PresetOption[] = [
  { value: 'tour_full', label: 'Full Tour: All Examples' },
  { value: 'tour_specificity', label: '1. Specificity Beats Order' },
  { value: 'tour_recursion', label: '2. Recursion Base Cases' },
  { value: 'tour_fizzbuzz', label: '3. Multi-Argument Specificity (FizzBuzz)' },
  { value: 'tour_sequence', label: '4. Sequence Blanks & Listables' },
  { value: 'tour_rewrites', label: '5. Data Rewriting (/.)' },
  { value: 'tour_lambdas', label: '6. Lambdas & Currying' },
  { value: 'tour_pipelines', label: '7. Pipes, Map & Fold' },
  { value: 'tour_control', label: '8. Control Flow (if & switch)' }
];

export { PRESETS };
