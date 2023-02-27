import React, { useRef, useEffect, useContext, ReactNode } from 'react';
import { CSSTransition as ReactCSSTransition } from 'react-transition-group';
type TransitionProps = {
  show?: boolean;
  enter?: string;
  enterStart?: string;
  enterEnd?: string;
  leave?: string;
  leaveStart?: string;
  leaveEnd?: string;
  appear?: boolean;
  unmountOnExit?: boolean;
  tag?: keyof JSX.IntrinsicElements;
  children?: ReactNode;
};

type ContextProps = {
  parent: {
    appear?: boolean;
    isInitialRender?: boolean;
    show?: boolean;
  };
};

const TransitionContext = React.createContext<ContextProps>({
  parent: {},
});

function useIsInitialRender(): boolean {
  const isInitialRender = useRef(true);
  useEffect(() => {
    isInitialRender.current = false;
  }, []);
  return isInitialRender.current;
}

function CSSTransition({
  show,
  enter = '',
  enterStart = '',
  enterEnd = '',
  leave = '',
  leaveStart = '',
  leaveEnd = '',
  appear,
  unmountOnExit,
  tag: Tag = 'div',
  children,
  ...rest
}: TransitionProps) {
  const enterClasses = enter.split(' ').filter(s => s.length);
  const enterStartClasses = enterStart.split(' ').filter(s => s.length);
  const enterEndClasses = enterEnd.split(' ').filter(s => s.length);
  const leaveClasses = leave.split(' ').filter(s => s.length);
  const leaveStartClasses = leaveStart.split(' ').filter(s => s.length);
  const leaveEndClasses = leaveEnd.split(' ').filter(s => s.length);
  const removeFromDom = unmountOnExit;

  function addClasses(node: HTMLElement | null, classes: string[]) {
    classes.length && node?.classList.add(...classes);
  }

  function removeClasses(node: HTMLElement | null, classes: string[]) {
    classes.length && node?.classList.remove(...classes);
  }

  const nodeRef = React.useRef<HTMLElement>(null);
  

  return (
    <ReactCSSTransition
      appear={appear}
      nodeRef={nodeRef}
      unmountOnExit={removeFromDom}
      in={show}
      addEndListener={(done: () => void) => {
        nodeRef.current?.addEventListener('transitionend', done, false);
      }}
      onEnter={() => {
        if (!removeFromDom && nodeRef.current) {
          nodeRef.current.style.display = '';
        }        addClasses(nodeRef.current, [...enterClasses, ...enterStartClasses]);
      }}
      onEntering={() => {
        removeClasses(nodeRef.current, enterStartClasses);
        addClasses(nodeRef.current, enterEndClasses);
      }}
      onEntered={() => {
        removeClasses(nodeRef.current, [...enterEndClasses, ...enterClasses]);
      }}
      onExit={() => {
        addClasses(nodeRef.current, [...leaveClasses, ...leaveStartClasses]);
      }}
      onExiting={() => {
        removeClasses(nodeRef.current, leaveStartClasses);
        addClasses(nodeRef.current, leaveEndClasses);
      }}
      onExited={() => {
        removeClasses(nodeRef.current, [...leaveEndClasses, ...leaveClasses]);
        if (!removeFromDom && nodeRef.current) {
          nodeRef.current.style.display = '';
        }  
      }}
    >
      <Tag ref={nodeRef} {...rest} style={{ display: !removeFromDom ? 'none' : null }}>
        {children}
      </Tag>
      
    </ReactCSSTransition>
  );
}


function Transition({ show, appear, ...rest }: any) {
  const { parent } = useContext(TransitionContext);
  const isInitialRender = useIsInitialRender();
  const isChild = show === undefined;
  if (isChild) {
    return <CSSTransition appear={parent.appear || !parent.isInitialRender} show={parent.show} {...rest} />;
  }
  return (
    <TransitionContext.Provider
      value={{
        parent: {
          show,
          isInitialRender,
          appear
        }
      }}
    >
      <CSSTransition appear={appear} show={show} {...rest} />
    </TransitionContext.Provider>
  );
}
export default Transition;
