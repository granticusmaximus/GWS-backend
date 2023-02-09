"use strict";(self.webpackChunkbackend=self.webpackChunkbackend||[]).push([[3650],{17316:(j,A,t)=>{t.r(A),t.d(A,{default:()=>xt});var e=t(67294),g=t(49656),s=t(97132),L=t(15482),n=t(68547),R=t(185),F=t(27821),x=t(80129),P=t(17034),$=t(36989),H=t(49066),N=t(41580),V=t(70004),c=t(41451),B=t(63237),y=t(12028),f=t(75515),O=t(74571),U=t(11047),G=t(4585),X=t(78114),ae=t(29729),Y=t(50738),ze=t(33012),We=t(78971),Ke=t(11900),Qe=t(92585),je=t(24652),$e=t(11357),Ve=t(27954),He=t(45697),v=t.n(He);const se=({pagination:o})=>e.createElement(N.x,{paddingTop:6},e.createElement(U.k,{alignItems:"flex-end",justifyContent:"space-between"},e.createElement(n.PageSizeURLQuery,null),e.createElement(n.PaginationURLQuery,{pagination:o})));se.defaultProps={pagination:{pageCount:0,pageSize:10,total:0}},se.propTypes={pagination:v().shape({page:v().number,pageCount:v().number,pageSize:v().number,total:v().number})};var oe=t(7681),M=t(49826),Ne=t(15537),Q=t(29728),Ge=t(20022),Je=t(2967);const ve=({selected:o,onSuccess:r})=>{const{formatMessage:i}=(0,s.useIntl)(),[d,u]=(0,e.useState)(!1),{isLoading:E,remove:p}=(0,Je.K)(),C=async()=>{await p(o),r()};return e.createElement(e.Fragment,null,e.createElement(Q.z,{variant:"danger-light",size:"S",startIcon:e.createElement(Ge.default,null),onClick:()=>u(!0)},i({id:"global.delete",defaultMessage:"Delete"})),e.createElement(n.ConfirmDialog,{isConfirmButtonLoading:E,isOpen:d,onToggleDialog:()=>u(!1),onConfirm:C}))};ve.propTypes={selected:v().arrayOf(M.pw,M.nx).isRequired,onSuccess:v().func.isRequired};var Xe=t(32605),Ye=t(80831),ke=t(41609),we=t.n(ke),qe=t(11276),_e=t(88655),pe=t(42866),he=t(59946),et=t(24969),tt=t(36856),nt=t(64777),ye=t(23724),J=t(55994),m=t(57197);const at=()=>{const o=(0,n.useNotification)(),r=(0,ye.useQueryClient)(),i=(0,m.IF)("actions/bulk-move"),d=({destinationFolderId:p,filesAndFolders:C})=>{const h=C.reduce((D,Z)=>{const{id:l,type:z}=Z,T=z==="asset"?"fileIds":"folderIds";return D[T]||(D[T]=[]),D[T].push(l),D},{});return m.be.post(i,{...h,destinationFolderId:p})},u=(0,ye.useMutation)(d,{onSuccess(p){const{data:{data:C}}=p;C?.files?.length>0&&(r.refetchQueries([J.Z,"assets"],{active:!0}),r.refetchQueries([J.Z,"asset-count"],{active:!0})),r.refetchQueries([J.Z,"folders"],{active:!0}),o({type:"success",message:{id:(0,m.OB)("modal.move.success-label"),defaultMessage:"Elements have been moved successfully."}})}});return{...u,move:(p,C)=>u.mutateAsync({destinationFolderId:p,filesAndFolders:C})}};var st=t(66951),ot=t(20796);const le=({onClose:o,selected:r,currentFolder:i})=>{const{formatMessage:d}=(0,s.useIntl)(),{data:u,isLoading:E}=(0,ot.v)(),{move:p}=at();if(!u)return null;const C=async(Z,{setErrors:l})=>{try{await p(Z.destination.value,r),o()}catch(z){const T=(0,n.getAPIInnerErrors)(z,{getTrad:m.OB}),w=Object.entries(T).reduce((q,[W,S])=>(q[W||"destination"]=S.defaultMessage,q),{});we()(w)||l(w)}},h=()=>{o()};if(E)return e.createElement(pe.P,{onClose:h,labelledBy:"title"},e.createElement(he.f,null,e.createElement(U.k,{justifyContent:"center",paddingTop:4,paddingBottom:4},e.createElement(_e.a,null,d({id:(0,m.OB)("content.isLoading"),defaultMessage:"Content is loading."})))));const D={destination:{value:i?.id||"",label:i?.name||u[0].label}};return e.createElement(pe.P,{onClose:h,labelledBy:"title"},e.createElement(Ye.Formik,{validateOnChange:!1,onSubmit:C,initialValues:D},({values:Z,errors:l,setFieldValue:z})=>e.createElement(n.Form,{noValidate:!0},e.createElement(et.x,null,e.createElement(f.Z,{fontWeight:"bold",textColor:"neutral800",as:"h2",id:"title"},d({id:(0,m.OB)("modal.folder.move.title"),defaultMessage:"Move elements to"}))),e.createElement(he.f,null,e.createElement(qe.r,{gap:4},e.createElement(O.P,{xs:12,col:12},e.createElement(oe.K,{spacing:1},e.createElement(nt.Q,{htmlFor:"folder-destination"},d({id:(0,m.OB)("form.input.label.folder-location"),defaultMessage:"Location"})),e.createElement(st.Z,{options:u,onChange:T=>{z("destination",T)},defaultValue:Z.destination,name:"destination",menuPortalTarget:document.querySelector("body"),inputId:"folder-destination",error:l?.destination,ariaErrorMessage:"destination-error"}),l.destination&&e.createElement(f.Z,{variant:"pi",as:"p",id:"folder-destination-error",textColor:"danger600"},l.destination))))),e.createElement(tt.m,{startActions:e.createElement(Q.z,{onClick:h,variant:"tertiary",name:"cancel"},d({id:"cancel",defaultMessage:"Cancel"})),endActions:e.createElement(Q.z,{type:"submit",loading:E},d({id:"modal.folder.move.submit",defaultMessage:"Move"}))}))))};le.defaultProps={currentFolder:void 0},le.propTypes={onClose:v().func.isRequired,currentFolder:M.nx,selected:v().arrayOf(M.nx,M.pw).isRequired};const re=({selected:o,onSuccess:r,currentFolder:i})=>{const{formatMessage:d}=(0,s.useIntl)(),[u,E]=(0,e.useState)(!1),p=()=>{E(!1),r()};return e.createElement(e.Fragment,null,e.createElement(Q.z,{variant:"secondary",size:"S",startIcon:e.createElement(Xe.Z,null),onClick:()=>E(!0)},d({id:"global.move",defaultMessage:"Move"})),u&&e.createElement(le,{currentFolder:i,onClose:p,selected:o}))};re.defaultProps={currentFolder:void 0},re.propTypes={onSuccess:v().func.isRequired,currentFolder:M.nx,selected:v().arrayOf(M.pw,M.nx).isRequired};const ie=({selected:o,onSuccess:r,currentFolder:i})=>{const{formatMessage:d}=(0,s.useIntl)();return e.createElement(oe.K,{horizontal:!0,spacing:2,paddingBottom:5},e.createElement(f.Z,{variant:"epsilon",textColor:"neutral600"},d({id:(0,Ne.Z)("list.assets.selected"),defaultMessage:"{numberFolders, plural, one {1 folder} other {# folders}} - {numberAssets, plural, one {1 asset} other {# assets}} selected"},{numberFolders:o.filter(({type:u})=>u==="folder").length,numberAssets:o.filter(({type:u})=>u==="asset").length})),e.createElement(ve,{selected:o,onSuccess:r}),e.createElement(re,{currentFolder:i,selected:o,onSuccess:r}))};ie.defaultProps={currentFolder:void 0},ie.propTypes={onSuccess:v().func.isRequired,currentFolder:M.nx,selected:v().arrayOf(M.pw,M.nx).isRequired};var lt=t(65169),de=t(96315),rt=t(70088);const it=({isFiltering:o,canCreate:r,canRead:i})=>o?{id:"list.assets-empty.title-withSearch",defaultMessage:"There are no elements with the applied filters"}:i?r?{id:"list.assets.empty-upload",defaultMessage:"Upload your first assets..."}:{id:"list.assets.empty",defaultMessage:"Media Library is empty"}:{id:"header.actions.no-permissions",defaultMessage:"No permissions to view"},Me=({canCreate:o,isFiltering:r,canRead:i,onActionClick:d})=>{const{formatMessage:u}=(0,s.useIntl)(),E=it({isFiltering:r,canCreate:o,canRead:i});return e.createElement(rt.i,{icon:i?null:lt.default,action:o&&!r&&e.createElement(Q.z,{variant:"secondary",startIcon:e.createElement(de.default,null),onClick:d},u({id:(0,m.OB)("header.actions.add-assets"),defaultMessage:"Add new assets"})),content:u({...E,id:(0,m.OB)(E.id)})})};Me.propTypes={canCreate:v().bool.isRequired,canRead:v().bool.isRequired,isFiltering:v().bool.isRequired,onActionClick:v().func.isRequired};var k=t(98101),dt=t(89597),ct=t(51386),ut=t(45219),Ce=t(97581);const mt=()=>{const o=(0,e.useRef)(null),[r,i]=(0,e.useState)(!1),{formatMessage:d}=(0,s.useIntl)(),{trackUsage:u}=(0,n.useTracking)(),[{query:E},p]=(0,n.useQueryParams)(),C=E?.filters?.$and||[],h=()=>i(l=>!l),D=l=>{p({filters:{$and:l},page:1})},Z=l=>{u("didFilterMediaLibraryElements",{location:"content-manager",filter:Object.keys(l[l.length-1])[0]}),p({filters:{$and:l},page:1})};return e.createElement(e.Fragment,null,e.createElement(Q.z,{variant:"tertiary",ref:o,startIcon:e.createElement(dt.Z,null),onClick:h,size:"S"},d({id:"app.utils.filters",defaultMessage:"Filters"})),r&&e.createElement(ut.Z,{displayedFilters:Ce.Z,filters:C,onSubmit:Z,onToggle:h,source:o}),e.createElement(ct.Z,{appliedFilters:C,filtersSchema:Ce.Z,onRemoveFilter:D}))};var gt=t(67838),ft=t(23620),Et=t(67109),vt=t(67851);const ce=({breadcrumbs:o,canCreate:r,folder:i,onToggleEditFolderDialog:d,onToggleUploadAssetDialog:u})=>{const{formatMessage:E}=(0,s.useIntl)(),{pathname:p}=(0,g.useLocation)(),[{query:C}]=(0,n.useQueryParams)(),h={...C,folder:i?.parent?.id??void 0};return e.createElement(gt.T,{title:E({id:(0,m.OB)("plugin.name"),defaultMessage:"Media Library"}),subtitle:o&&i&&e.createElement(vt.O,{as:"nav",label:E({id:(0,m.OB)("header.breadcrumbs.nav.label"),defaultMessage:"Folders navigation"}),breadcrumbs:o,currentFolderId:i?.id}),navigationAction:i&&e.createElement(ft.r,{startIcon:e.createElement(Et.Z,null),to:`${p}?${(0,x.stringify)(h,{encode:!1})}`},E({id:(0,m.OB)("header.actions.folder-level-up"),defaultMessage:"Back"})),primaryAction:r&&e.createElement(oe.K,{horizontal:!0,spacing:2},e.createElement(Q.z,{startIcon:e.createElement(de.default,null),variant:"secondary",onClick:d},E({id:(0,m.OB)("header.actions.add-folder"),defaultMessage:"Add new folder"})),e.createElement(Q.z,{startIcon:e.createElement(de.default,null),onClick:u},E({id:(0,m.OB)("header.actions.add-assets"),defaultMessage:"Add new assets"})))})};ce.defaultProps={breadcrumbs:!1,folder:null},ce.propTypes={breadcrumbs:v().oneOfType([M.Fv,v().bool]),canCreate:v().bool.isRequired,folder:M.nx,onToggleEditFolderDialog:v().func.isRequired,onToggleUploadAssetDialog:v().func.isRequired};var pt=t(73817),ht=t(44466),yt=t(31817),Mt=t(42047),Ct=t(16838);const Lt=(0,F.default)(N.x)`
  height: ${32/16}rem;
  display: flex;
  align-items: center;
`,Le=(0,F.default)(f.Z)`
  max-width: 100%;
`,Ae=(0,F.default)(N.x)`
  svg {
    path {
      fill: ${({theme:o})=>o.colors.neutral500};
    }
  }
`,At=()=>{const{push:o}=(0,g.useHistory)(),{canRead:r,canCreate:i,canUpdate:d,canCopyLink:u,canDownload:E,isLoading:p}=(0,yt.y)(),C=(0,e.useRef)(),{formatMessage:h}=(0,s.useIntl)(),{pathname:D}=(0,g.useLocation)(),{trackUsage:Z}=(0,n.useTracking)(),[{query:l},z]=(0,n.useQueryParams)(),T=Boolean(l._q||l.filters),[w,q]=(0,n.usePersistentState)(M.uf.view,M.Uk.GRID),W=w===M.Uk.GRID,{data:S,isLoading:Ot,errors:Dt}=(0,pt.L)({skipWhen:!r,query:l}),{data:Ft,isLoading:Pt,errors:Tt}=(0,ht.j)({enabled:r&&S?.pagination?.page===1&&!(0,m.rV)(l),query:l}),{data:ue,isLoading:Be,error:St}=(0,Mt.W)(l?.folder,{enabled:r&&!!l?.folder});St?.response?.status===404&&o(D);const _=Ft?.map(a=>({...a,type:"folder",folderURL:(0,m.Km)(D,l,a.id),isSelectable:d}))??[],I=_?.length||0,ee=S?.results?.map(a=>({...a,type:"asset",isSelectable:d}))||[],b=ee?.length??0,It=S?.pagination?.total,Re=Be||Pt||p||Ot,[bt,Ut]=(0,e.useState)(!1),[Zt,xe]=(0,e.useState)(!1),[Oe,me]=(0,e.useState)(void 0),[ge,De]=(0,e.useState)(void 0),[K,{selectOne:te,selectAll:Fe}]=(0,n.useSelectionState)(["type","id"],[]),Pe=K?.length>0&&K?.length!==b+I,fe=()=>Ut(a=>!a),Te=({created:a=!1}={})=>{a&&l?.page!=="1"&&z({...l,page:1}),xe(ne=>!ne)},Se=(a,ne)=>{a.target.checked&&Z("didSelectAllMediaLibraryElements"),Fe(ne)},Ie=a=>{Z("didSortMediaLibraryElements",{location:"upload",sort:a}),z({sort:a})},be=a=>{De(a),xe(!0)},zt=a=>{De(null),Te(a),C.current&&C.current.focus()},Ue=a=>{a===b&&S.pagination.page===S.pagination.pageCount&&S.pagination.page>1&&z({...l,page:S.pagination.page-1})},Wt=()=>{Fe(),Ue(K.length)};return(0,n.useFocusWhenNavigate)(),e.createElement(P.A,null,e.createElement(R.o,{"aria-busy":Re},e.createElement(ce,{breadcrumbs:!Be&&(0,m.M4)(ue,{pathname:D,query:l}),canCreate:i,onToggleEditFolderDialog:Te,onToggleUploadAssetDialog:fe,folder:ue}),e.createElement($.Z,{startActions:e.createElement(e.Fragment,null,d&&W&&(b>0||I>0)&&e.createElement(Lt,{paddingLeft:2,paddingRight:2,background:"neutral0",hasRadius:!0,borderColor:"neutral200"},e.createElement(c.C,{"aria-label":h({id:(0,m.OB)("bulk.select.label"),defaultMessage:"Select all folders & assets"}),indeterminate:Pe,value:(b>0||I>0)&&K.length===b+I,onChange:a=>Se(a,[...ee,..._])})),r&&W&&e.createElement(Ve.Z,{onChangeSort:Ie}),r&&e.createElement(mt,null)),endActions:e.createElement(e.Fragment,null,e.createElement(n.CheckPermissions,{permissions:Ct.Z.configureView},e.createElement(Ae,{paddingTop:1,paddingBottom:1},e.createElement(y.h,{forwardedAs:g.Link,to:{pathname:`${D}/configuration`,search:(0,x.stringify)(l,{encode:!1})},icon:e.createElement(X.Z,null),label:h({id:"app.links.configure-view",defaultMessage:"Configure the view"})}))),e.createElement(Ae,{paddingTop:1,paddingBottom:1},e.createElement(y.h,{icon:W?e.createElement(Y.Z,null):e.createElement(ae.Z,null),label:h(W?{id:"view-switch.list",defaultMessage:"List View"}:{id:"view-switch.grid",defaultMessage:"Grid View"}),onClick:()=>q(W?M.Uk.LIST:M.Uk.GRID)})),e.createElement(n.SearchURLQuery,{label:h({id:(0,m.OB)("search.label"),defaultMessage:"Search for an asset"}),trackedEvent:"didSearchMediaLibraryElements",trackedEventDetails:{location:"upload"}}))}),e.createElement(H.D,null,K.length>0&&e.createElement(ie,{currentFolder:ue,selected:K,onSuccess:Wt}),Re&&e.createElement(n.LoadingIndicatorPage,null),(Dt||Tt)&&e.createElement(n.AnErrorOccurred,null),I===0&&b===0&&e.createElement(Me,{canCreate:i,canRead:r,isFiltering:T,onActionClick:fe}),r&&!W&&(b>0||I>0)&&e.createElement($e.b,{assetCount:b,folderCount:I,indeterminate:Pe,onChangeSort:Ie,onChangeFolder:a=>o((0,m.Km)(D,l,a)),onEditAsset:me,onEditFolder:be,onSelectOne:te,onSelectAll:Se,rows:[..._,...ee],selected:K,shouldDisableBulkSelect:!d,sortQuery:l?.sort??""}),r&&W&&e.createElement(e.Fragment,null,I>0&&e.createElement(je.a,{title:(T&&b>0||!T)&&h({id:(0,m.OB)("list.folders.title"),defaultMessage:"Folders ({count})"},{count:I})||""},_.map(a=>{const Kt=!!K.filter(({type:Ee})=>Ee==="folder").find(Ee=>Ee.id===a.id),Ze=(0,m.Km)(D,l,a?.id);return e.createElement(O.P,{col:3,key:`folder-${a.id}`},e.createElement(k.Ac,{ref:ge&&a.id===ge.id?C:void 0,ariaLabel:a.name,id:`folder-${a.id}`,to:Ze,startAction:te&&a.isSelectable?e.createElement(k.MM,{"data-testid":`folder-checkbox-${a.id}`,value:Kt,onChange:()=>te(a)}):null,cardActions:e.createElement(y.h,{icon:e.createElement(G.Z,null),"aria-label":h({id:(0,m.OB)("list.folder.edit"),defaultMessage:"Edit folder"}),onClick:()=>be(a)})},e.createElement(k.Bu,null,e.createElement(k.u6,{to:Ze},e.createElement(U.k,{as:"h2",direction:"column",alignItems:"start",maxWidth:"100%"},e.createElement(Le,{fontWeight:"semiBold",ellipsis:!0},a.name,e.createElement(B.T,null,":")),e.createElement(Le,{as:"span",textColor:"neutral600",variant:"pi",ellipsis:!0},h({id:(0,m.OB)("list.folder.subtitle"),defaultMessage:"{folderCount, plural, =0 {# folder} one {# folder} other {# folders}}, {filesCount, plural, =0 {# asset} one {# asset} other {# assets}}"},{folderCount:a.children.count,filesCount:a.files.count})))))))})),b>0&&I>0&&e.createElement(N.x,{paddingTop:6,paddingBottom:4},e.createElement(V.i,null)),b>0&&e.createElement(Qe.r,{assets:ee,onEditAsset:me,onSelectAsset:te,selectedAssets:K.filter(({type:a})=>a==="asset"),title:(!T||T&&I>0)&&S?.pagination?.page===1&&h({id:(0,m.OB)("list.assets.title"),defaultMessage:"Assets ({count})"},{count:It})||""})),S?.pagination&&e.createElement(se,{pagination:S.pagination}))),bt&&e.createElement(ze.x,{onClose:fe,trackedLocation:"upload",folderId:l?.folder}),Zt&&e.createElement(We.f,{onClose:zt,folder:ge,parentFolderId:l?.folder,location:"upload"}),Oe&&e.createElement(Ke.s,{onClose:a=>{a===null&&Ue(1),me(void 0)},asset:Oe,canUpdate:d,canCopyLink:u,canDownload:E,trackedLocation:"upload"}))};var Bt=t(60862);const Rt=(0,e.lazy)(()=>t.e(9514).then(t.bind(t,87532))),xt=()=>{const{config:{isLoading:o,isError:r,data:i}}=(0,Bt.Z)(),[{rawQuery:d},u]=(0,n.useQueryParams)(),{formatMessage:E}=(0,s.useIntl)(),p=E({id:(0,m.OB)("plugin.name"),defaultMessage:"Media Library"});return(0,e.useEffect)(()=>{o||r||d||u({sort:i.sort,page:1,pageSize:i.pageSize})},[o,r,i,d,u]),(0,n.useFocusWhenNavigate)(),e.createElement(R.o,{"aria-busy":o},e.createElement(L.Helmet,{title:p}),o&&e.createElement(n.LoadingIndicatorPage,null),d?e.createElement(e.Suspense,{fallback:e.createElement(n.LoadingIndicatorPage,null)},e.createElement(g.Switch,null,e.createElement(g.Route,{exact:!0,path:`/plugins/${J.Z}`,component:At}),e.createElement(g.Route,{exact:!0,path:`/plugins/${J.Z}/configuration`,render:()=>e.createElement(Rt,{config:i})}))):null)}},36989:(j,A,t)=>{t.d(A,{Z:()=>x});var e=t(67294),g=t(45697),s=t(27821),L=t(41580),n=t(11047);const R=(0,s.default)(n.k)`
  & > * + * {
    margin-left: ${({theme:P})=>P.spaces[2]};
  }

  margin-left: ${({pullRight:P})=>P?"auto":void 0};
`,F=(0,s.default)(R)`
  flex-shrink: 0;
`,x=({startActions:P,endActions:$})=>P||$?e.createElement(L.x,{paddingLeft:10,paddingRight:10},e.createElement(L.x,{paddingBottom:4},e.createElement(n.k,{justifyContent:"space-between",alignItems:"flex-start"},P&&e.createElement(R,{wrap:"wrap"},P),$&&e.createElement(F,{pullRight:!0},$)))):null;x.defaultProps={endActions:void 0,startActions:void 0},x.propTypes={endActions:g.node,startActions:g.node}},49066:(j,A,t)=>{t.d(A,{D:()=>L});var e=t(67294),g=t(45697),s=t(41580);const L=({children:n})=>e.createElement(s.x,{paddingLeft:10,paddingRight:10},n);L.propTypes={children:g.node.isRequired}},67838:(j,A,t)=>{t.d(A,{T:()=>H});var e=t(67294),g=t(27821),s=t(45697),L=t(75515),n=t(41580),R=t(11047);const F=c=>{const B=(0,e.useRef)(null),[y,f]=(0,e.useState)(!0),O=([U])=>{f(U.isIntersecting)};return(0,e.useEffect)(()=>{const U=B.current,G=new IntersectionObserver(O,c);return U&&G.observe(B.current),()=>{U&&G.disconnect()}},[B,c]),[B,y]};var x=t(98402);const P=(c,B)=>{const y=(0,x.useCallbackRef)(B);(0,e.useLayoutEffect)(()=>{const f=new ResizeObserver(y);return Array.isArray(c)?c.forEach(O=>{O.current&&f.observe(O.current)}):c.current&&f.observe(c.current),()=>{f.disconnect()}},[c,y])},$=()=>{const c=(0,e.useRef)(null),[B,y]=(0,e.useState)(null),[f,O]=F({root:null,rootMargin:"0px",threshold:0});return P(f,()=>{f.current&&y(f.current.getBoundingClientRect())}),(0,e.useEffect)(()=>{c.current&&y(c.current.getBoundingClientRect())},[c]),{containerRef:f,isVisible:O,baseHeaderLayoutRef:c,headerSize:B}},H=c=>{const{containerRef:B,isVisible:y,baseHeaderLayoutRef:f,headerSize:O}=$();return e.createElement(e.Fragment,null,e.createElement("div",{style:{height:O?.height},ref:B},y&&e.createElement(V,{ref:f,...c})),!y&&e.createElement(V,{...c,sticky:!0,width:O?.width}))};H.displayName="HeaderLayout";const N=(0,g.default)(n.x)`
  position: fixed;
  top: 0;
  right: 0;
  width: ${c=>c.width}px;
  z-index: 4;
  box-shadow: ${({theme:c})=>c.shadows.tableShadow};
`,V=e.forwardRef(({navigationAction:c,primaryAction:B,secondaryAction:y,subtitle:f,title:O,sticky:U,width:G,...X},ae)=>{const Y=typeof f=="string";return U?e.createElement(N,{paddingLeft:6,paddingRight:6,paddingTop:3,paddingBottom:3,background:"neutral0",width:G,"data-strapi-header-sticky":!0},e.createElement(R.k,{justifyContent:"space-between"},e.createElement(R.k,null,c&&e.createElement(n.x,{paddingRight:3},c),e.createElement(n.x,null,e.createElement(L.Z,{variant:"beta",as:"h1",...X},O),Y?e.createElement(L.Z,{variant:"pi",textColor:"neutral600"},f):f),y?e.createElement(n.x,{paddingLeft:4},y):null),e.createElement(R.k,null,B?e.createElement(n.x,{paddingLeft:2},B):void 0))):e.createElement(n.x,{ref:ae,paddingLeft:10,paddingRight:10,paddingBottom:8,paddingTop:c?6:8,background:"neutral100","data-strapi-header":!0},c?e.createElement(n.x,{paddingBottom:2},c):null,e.createElement(R.k,{justifyContent:"space-between"},e.createElement(R.k,null,e.createElement(L.Z,{as:"h1",variant:"alpha",...X},O),y?e.createElement(n.x,{paddingLeft:4},y):null),B),Y?e.createElement(L.Z,{variant:"epsilon",textColor:"neutral600",as:"p"},f):f)});V.displayName="BaseHeaderLayout",V.defaultProps={navigationAction:void 0,primaryAction:void 0,secondaryAction:void 0,subtitle:void 0,sticky:!1,width:void 0},V.propTypes={navigationAction:s.node,primaryAction:s.node,secondaryAction:s.node,sticky:s.bool,subtitle:s.oneOfType([s.string,s.node]),title:s.string.isRequired,width:s.number},H.defaultProps={navigationAction:void 0,primaryAction:void 0,secondaryAction:void 0,subtitle:void 0},H.propTypes={navigationAction:s.node,primaryAction:s.node,secondaryAction:s.node,subtitle:s.oneOfType([s.string,s.node]),title:s.string.isRequired}},17034:(j,A,t)=>{t.d(A,{A:()=>F});var e=t(67294),g=t(45697),s=t(27821),L=t(41580);const n=(0,s.default)(L.x)`
  display: grid;
  grid-template-columns: ${({hasSideNav:x})=>x?"auto 1fr":"1fr"};
`,R=(0,s.default)(L.x)`
  overflow-x: hidden;
`,F=({sideNav:x,children:P})=>e.createElement(n,{hasSideNav:Boolean(x)},x,e.createElement(R,{paddingBottom:10},P));F.defaultProps={sideNav:void 0},F.propTypes={children:g.node.isRequired,sideNav:g.node}},185:(j,A,t)=>{t.d(A,{o:()=>n});var e=t(67294),g=t(45697),s=t(27821);const L=s.default.main`
  // To prevent global outline on focus visible to force an outline when Main is focused
  &:focus-visible {
    outline: none;
  }
`,n=({labelledBy:R,...F})=>{const x=R||"main-content-title";return e.createElement(L,{"aria-labelledby":x,id:"main-content",tabIndex:-1,...F})};n.defaultProps={labelledBy:void 0},n.propTypes={labelledBy:g.string}},67109:(j,A,t)=>{t.d(A,{Z:()=>g});var e=t(85893);function g(s){return(0,e.jsx)("svg",{width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...s,children:(0,e.jsx)("path",{d:"M24 13.3a.2.2 0 01-.2.2H5.74l8.239 8.239a.2.2 0 010 .282L12.14 23.86a.2.2 0 01-.282 0L.14 12.14a.2.2 0 010-.282L11.86.14a.2.2 0 01.282 0L13.98 1.98a.2.2 0 010 .282L5.74 10.5H23.8c.11 0 .2.09.2.2v2.6z",fill:"#212134"})})}},78114:(j,A,t)=>{t.d(A,{Z:()=>g});var e=t(85893);function g(s){return(0,e.jsx)("svg",{width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...s,children:(0,e.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M2.68 9.192c-.6.276-2.114 1.18-2.306 1.303a.792.792 0 00-.374.68v1.65a.797.797 0 00.384.687c.254.16 1.73 1.042 2.306 1.303l.744 1.8c-.24.634-.67 2.333-.72 2.554a.797.797 0 00.216.744l1.167 1.166a.801.801 0 00.744.216l.03-.008c.36-.092 1.946-.498 2.523-.712l1.8.744c.276.6 1.181 2.115 1.304 2.307a.805.805 0 00.679.374h1.649a.797.797 0 00.686-.384c.16-.254 1.042-1.73 1.303-2.306l1.8-.744c.634.24 2.333.67 2.554.72a.797.797 0 00.744-.216l1.166-1.167a.803.803 0 00.216-.744l-.008-.03c-.092-.36-.498-1.946-.712-2.523l.744-1.8c.6-.276 2.115-1.181 2.307-1.304a.804.804 0 00.374-.679v-1.649a.796.796 0 00-.382-.679c-.254-.16-1.73-1.041-2.306-1.303l-.744-1.8c.24-.634.67-2.333.72-2.554a.796.796 0 00-.216-.744l-1.166-1.173a.802.802 0 00-.744-.216l-.03.008c-.361.092-1.947.498-2.524.712l-1.8-.744c-.276-.6-1.18-2.115-1.303-2.307a.803.803 0 00-.68-.374h-1.65a.797.797 0 00-.68.382c-.16.254-1.041 1.73-1.303 2.306l-1.8.744c-.634-.24-2.333-.67-2.554-.72a.797.797 0 00-.744.216L2.921 4.094a.802.802 0 00-.216.744l.008.03c.092.361.498 1.947.712 2.524l-.744 1.8zM12 17a5 5 0 100-10 5 5 0 000 10z",fill:"#212134"})})}}}]);
