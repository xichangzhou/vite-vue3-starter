import{a as e}from"./index.80e861a2.js";import{y as t,o as s,f as o,j as r,K as a,F as n,A as l}from"./vendor.e56b1e64.js";const p={setup(){const t=e();return{go:()=>{t.push("/test/jsonxcz")},replace:()=>{t.replace("/test/jsonxcz")}}}},c=r("div",null,"Post",-1),u=l("go test"),i=l("replace test");p.render=function(e,l,p,d,f,m){const j=t("el-button");return s(),o(n,null,[c,r(j,{type:"primary",onClick:l[1]||(l[1]=e=>d.go())},{default:a((()=>[u])),_:1}),r(j,{type:"primary",onClick:l[2]||(l[2]=e=>d.replace())},{default:a((()=>[i])),_:1})],64)};export default p;