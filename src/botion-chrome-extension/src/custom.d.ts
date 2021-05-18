declare module "*.svg" {
  const content: any;
  export default content;
}

declare module "*.module.css" {
  const styles: { [className: string]: string };
  export default styles;
}
