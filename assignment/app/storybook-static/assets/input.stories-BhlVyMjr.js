import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as h}from"./iframe-shKQdLd4.js";import"./preload-helper-D9Z9MdNV.js";const d=({value:m,onChange:u,label:s,placeholder:p,helperText:r,errorMessage:n,disabled:c=!1,invalid:t=!1,variant:f="filled",size:i="md"})=>{const[l,x]=h.useState(!1),g=()=>{x(!l)},v=l?"text":"password",y=`
  form-control 
  ${f} 
  ${i==="sm"?"form-control-sm":i==="lg"?"form-control-lg":""} 
  ${t?"is-invalid":""} 
  text-black 
  mx-2
`.trim(),o=s||void 0;return e.jsxs("div",{className:"mb-3 w-50 m-auto",children:[s&&e.jsx("label",{htmlFor:o,className:"form-label mx-3 text-secondary",children:s}),e.jsxs("div",{className:"input-wrapper",children:[e.jsx("input",{id:o,type:v,className:y,value:m,onChange:u,placeholder:p,disabled:c}),e.jsx("i",{className:`bi ${l?"bi-eye-fill":"bi-eye-slash-fill"} password-icon mx-3`,onClick:g})]}),r&&!t&&e.jsx("div",{className:"form-text mx-4 text-primary",children:r}),t&&n&&e.jsxs("div",{className:"error-message mx-4 text-danger fw-bold",children:["..",n]})]})};d.__docgenInfo={description:"",methods:[],displayName:"InputField",props:{value:{required:!1,tsType:{name:"string"},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(e: React.ChangeEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"ReactChangeEvent",raw:"React.ChangeEvent<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},name:"e"}],return:{name:"void"}}},description:""},label:{required:!1,tsType:{name:"string"},description:""},placeholder:{required:!1,tsType:{name:"string"},description:""},helperText:{required:!1,tsType:{name:"string"},description:""},errorMessage:{required:!1,tsType:{name:"string"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},invalid:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},variant:{required:!1,tsType:{name:"union",raw:"'filled' | 'outlined' | 'ghost'",elements:[{name:"literal",value:"'filled'"},{name:"literal",value:"'outlined'"},{name:"literal",value:"'ghost'"}]},description:"",defaultValue:{value:"'filled'",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},description:"",defaultValue:{value:"'md'",computed:!1}}}};const j={title:"Components/InputField",component:d,argTypes:{label:{control:"text"},placeholder:{control:"text"},value:{control:"text"},disabled:{control:"boolean"},invalid:{control:"boolean"},helperText:{control:"text"},errorMessage:{control:"text"},variant:{control:"radio",options:["filled","outlined","ghost"]},size:{control:"radio",options:["sm","md","lg"]}}},a={args:{label:"Username",placeholder:"Enter your username",value:"",disabled:!1,invalid:!1,helperText:"This is your username",errorMessage:"Username is required",variant:"filled",size:"md"}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Username",
    placeholder: "Enter your username",
    value: "",
    disabled: false,
    invalid: false,
    helperText: "This is your username",
    errorMessage: "Username is required",
    variant: "filled",
    size: "md"
  }
}`,...a.parameters?.docs?.source}}};const w=["Default"];export{a as Default,w as __namedExportsOrder,j as default};
