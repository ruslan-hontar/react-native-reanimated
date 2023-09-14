import React, { ForwardedRef, forwardRef, RefAttributes } from 'react';
import {
  FlatList,
  FlatListProps,
  LayoutChangeEvent,
  StyleSheet,
} from 'react-native';
import { AnimatedView } from './View';
import createAnimatedComponent from '../../createAnimatedComponent';
import { ILayoutAnimationBuilder } from '../layoutReanimation/animationBuilder/commonTypes';
import { StyleProps } from '../commonTypes';

const AnimatedFlatList = createAnimatedComponent(FlatList as any) as any;

interface AnimatedFlatListProps {
  onLayout: (event: LayoutChangeEvent) => void;
  // implicit `children` prop has been removed in @types/react^18.0.0
  children: React.ReactNode;
  inverted?: boolean;
  horizontal?: boolean;
}

const createCellRenderer = (
  itemLayoutAnimation?: ILayoutAnimationBuilder,
  cellStyle?: StyleProps
) => {
  const cellRenderer = (props: AnimatedFlatListProps) => {
    return (
      <AnimatedView
        layout={itemLayoutAnimation}
        onLayout={props.onLayout}
        style={cellStyle}>
        {props.children}
      </AnimatedView>
    );
  };

  return cellRenderer;
};

export interface ReanimatedFlatListProps<ItemT> extends FlatListProps<ItemT> {
  itemLayoutAnimation?: ILayoutAnimationBuilder;
}

export const ReanimatedFlatList = forwardRef(
  (props: ReanimatedFlatListProps<any>, ref: ForwardedRef<FlatList>) => {
    const { itemLayoutAnimation, ...restProps } = props;

    const cellStyle = restProps?.inverted
      ? restProps?.horizontal
        ? styles.horizontallyInverted
        : styles.verticallyInverted
      : undefined;

    const cellRenderer = React.useMemo(
      () => createCellRenderer(itemLayoutAnimation, cellStyle),
      [cellStyle]
    );

    return (
      <AnimatedFlatList
        ref={ref}
        {...restProps}
        CellRendererComponent={cellRenderer}
      />
    );
  }
) as <T>(
  props: ReanimatedFlatListProps<T> & RefAttributes<FlatList<any>>
) => React.ReactElement;

export type ReanimatedFlatList<T> = typeof ReanimatedFlatList<T> & FlatList<T>;
const styles = StyleSheet.create({
  verticallyInverted: { transform: [{ scaleY: -1 }] },
  horizontallyInverted: { transform: [{ scaleX: -1 }] },
});
