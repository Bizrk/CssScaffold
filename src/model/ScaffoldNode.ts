export interface ScaffoldNode {
  tagName: string | null;
  id: string | null;
  classes: string[];
  selector: string | null;
  children: ScaffoldNode[];
}
