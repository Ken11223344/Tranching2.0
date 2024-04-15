import { Drawer } from "antd"
import { forwardRef, useImperativeHandle, useState } from "react";
import "./Drawer.scss"

interface MyRef {
  showDrawer: () => void,
  onClose: () => void
}

interface MyProps {
  headHeight:Number
}

const SelfDrawer = forwardRef<MyRef,MyProps>((props,ref) => {

  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  useImperativeHandle(
    ref,
    ()=>({
      showDrawer,
      onClose
    }),
    []
  )
  const onClose = () => {
    setOpen(false);
  };

  const list = ["Home", "Features", "Document", "Roadmap", "Partners"];


  return(
    <Drawer
        placement="right"
        closable={false}
        onClose={onClose}
        open={open}
        getContainer={false}
        className="myDrawer"
        rootStyle={{top:props.headHeight as number - 1}}
      >
        {
          list.map((item,index)=>{
            return <div key={index} className="router_name">{item}</div>
          })
        }
      </Drawer>
  )
})

export default SelfDrawer