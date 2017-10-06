﻿import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutDemoComponent } from './about/about.demo';
import { AccordionDemoComponent } from './accordion/accordion.demo';
import { AlertDemoComponent } from './alert/alert.demo';
import { ApplicationMenuLazyDemoComponent } from './application-menu/application-menu-lazy.demo';
import { AutocompleteDemoComponent } from './autocomplete/autocomplete.demo';
import { BusyIndicatorDemoComponent } from './busyindicator/form.demo';
import { ButtonDemoComponent } from './button/button.demo';
import { ChartDemoComponent } from './chart/chart.demo';
import { CheckBoxDemoComponent } from './checkbox/checkbox.demo';
import { ColorPickerDemoComponent } from './colorpicker/colorpicker.demo';
import { CompletionChartDemoComponent } from './completion-chart/completion-chart.demo';
import { ContextMenuDemoComponent } from './context-menu/context-menu.demo';
import { ContextualActionPanelDemoComponent } from './contextual-action-panel/contextual-action-panel.demo';
import { DataGridBreadcrumbDemoComponent } from './datagrid/datagrid-breadcrumb.demo';
import { DataGridContentDemoComponent } from './datagrid/datagrid-content.demo';
import { DataGridDynamicDemoComponent } from './datagrid/datagrid-dynamic.demo';
import { DataGridEditorsDemoComponent } from './datagrid/datagrid-editors.demo';
import { DataGridFixedHeaderDemoComponent } from './datagrid/datagrid-fixedheader.demo';
import { DataGridGroupableDemoComponent } from './datagrid/datagrid-groupable.demo';
import { DataGridGroupedHeaderDemoComponent } from './datagrid/datagrid-grouped-header.demo';
import { DataGridMixedSelectionDemoComponent } from './datagrid/datagrid-mixed-selection.demo';
import { DataGridPagingIndeterminateDemoComponent } from './datagrid/datagrid-paging-indeterminate.demo';
import { DataGridPagingServiceDemoComponent } from './datagrid/datagrid-paging-service.demo';
import { DataGridServiceDemoComponent } from './datagrid/datagrid-service.demo';
import { DataGridSettingsDemoComponent } from './datagrid/datagrid-settings.demo';
import { DataGridStandardFormatterDemoComponent } from './datagrid/datagrid-standard-formatter.demo';
import { DataGridTreeGridDemoComponent } from './datagrid/datagrid-treegrid.demo';
import { DatepickerDemoComponent } from './datepicker/datepicker.demo';
import { DropdownAsyncBusyDemoComponent } from './dropdown/dropdown-async-busy.demo';
import { DropdownAsyncDemoComponent } from './dropdown/dropdown-async.demo';
import { DropdownDemoComponent } from './dropdown/dropdown.demo';
import { DropdownLMDemoComponent } from './dropdown/dropdown-lm.demo';
import { DropdownMultiselectDemoComponent } from './dropdown/dropdown-multiselect.demo';
import { DropdownSimpleDemoComponent } from './dropdown/dropdown-simple.demo';
import { EditorDemoComponent } from './editor/editor.demo';
import { ErrorDemoComponent } from './error/error.demo';
import { ExpandableAreaDemoComponent } from './expandablearea/expandablearea.demo';
import { FileUploadDemoComponent } from './fileupload/fileupload.demo';
import { HeaderTabsDemoComponent } from './header/header-tabs.demo';
import { HeaderToolbarAndTabsDemoComponent } from './header/header-toolbar-and-tabs.demo';
import { HeaderToolbarDemoComponent } from './header/header-toolbar.demo';
import { HierarchyDemoComponent } from './hierarchy/hierarchy.demo';
import { HierarchyPagingDemoComponent } from './hierarchy/hierarchy-paging.demo';
import { HomePageDemoComponent } from './homepage/homepage.demo';
import { HomePageScenarioADemoComponent } from './homepage/homepage-scenario-a.demo';
import { HomePageScenarioBDemoComponent } from './homepage/homepage-scenario-b.demo';
import { HomePageScenarioCDemoComponent } from './homepage/homepage-scenario-c.demo';
import { HyperlinkDemoComponent } from './hyperlink/hyperlink.demo';
import { IconDemoComponent } from './icon/icon.demo';
import { LabelDemoComponent } from './label/label.demo';
import { ListViewDemoComponent } from './listview/listview.demo';
import { LookupDemoComponent } from './lookup/lookup.demo';
import { LookupValidationDemoComponent } from './lookup/lookup-validation.demo';
import { MaskDemoComponent } from './mask/mask.demo';
import { MenuButtonDemoComponent } from './menu-button/menu-button.demo';
import { MessageDemoComponent } from './message/message.demo';
import { ModalDialogDemoComponent } from './modal-dialog/modal-dialog.demo';
import { PopDownDemoComponent } from './popdown/popdown.demo';
import { PopupMenuDemoComponent } from './popupmenu/popupmenu.demo';
import { ProgressDemoComponent } from './progress/progress.demo';
import { RadioButtonDemoComponent } from './radiobutton/radiobutton.demo';
import { SliderDemoComponent } from './slider/slider.demo';
import { SplitterHorizontalDemoComponent } from './splitter/splitter-horizontal.demo';
import { SplitterVerticalDemoComponent } from './splitter/splitter-vertical.demo';
import { SpinboxDemoComponent } from './spinbox/spinbox.demo';
import { StepProcessBtnDisableDemoComponent } from './stepprocess/stepprocessbuttondisable.demo';
import { StepProcessDemoComponent } from './stepprocess/stepprocess.demo';
import { StepProcessDataDrivenDemoComponent } from './stepprocess/stepprocess-data-driven.demo';
import { StepProcessVetoableDemoComponent } from './stepprocess/stepprocessvetoable.demo';
import { SwapListDemoComponent } from './swaplist/swaplist.demo';
import { SwapListDynamicDemoComponent } from './swaplist/swaplist-dynamic.demo';
import { SwapListFullAccessDemoComponent } from './swaplist/swaplist-full-access.demo';
import { SwapListServiceDemoComponent } from './swaplist/swaplist-service.demo';
import { TabsBasicDemoComponent } from './tabs/tabs-basic.demo';
import { TabsCountsDemoComponent } from './tabs/tabs-counts.demo';
import { TabsDataDrivenDemoComponent } from './tabs/tabs-datadriven.demo';
import { TabsDismissibleDemoComponent } from './tabs/tabs-dismissible.demo';
import { TabsDropdownDemoComponent } from './tabs/tabs-dropdown.demo';
import { TabsDynamicDemoComponent } from './tabs/tabs-dynamic.demo';
import { TabsVerticalDemoComponent } from './tabs/tabs-vertical.demo';
import { TextareaDemoComponent } from './textarea/textarea.demo';
import { TimePickerDemoComponent } from './timepicker/timepicker.demo';
import { ToastDemoComponent } from './toast/toast.demo';
import { ToolbarAllIconsDemoComponent } from './toolbar/toolbar-all-icons.demo';
import { ToolbarBasicDemoComponent } from './toolbar/toolbar-basic.demo';
import { ToolbarDataDrivenDemoComponent } from './toolbar/toolbar-datadriven.demo';
import { ToolbarStateComponent } from './toolbar/toolbar-state.component';
import { ToolbarRightAlignedDemoComponent } from './toolbar/toolbar-right-aligned.demo';
import { TooltipDemoComponent } from './tooltip/tooltip.demo';
import { TrackDirtyDemoComponent } from './trackdirty/trackdirty.demo';
import { TreeContentDemoComponent } from './tree/tree-content.demo';
import { TreeDynamicDemoComponent } from './tree/tree-dynamic.demo';
import { TreeServiceDemoComponent } from './tree/tree-service.demo';
import { TreeSourceDemoComponent } from './tree/tree-source.demo';
import { ValidationFormDemoComponent } from './validation/validation-form.demo';
import { ValidationFormEventDemoComponent } from './validation/validation-form-event.demo';
import { ValidationFormGroupDemoComponent } from './validation/validation-form-group.demo';
import { DataGridCustomFormatterDemoComponent } from './datagrid/datagrid-custom-formatter.demo';
import { DataGridCustomFormatterServiceDemoComponent } from './datagrid/datagrid-custom-formatter-service.demo';
import { ExpandableAreaFooterDemoComponent } from './expandablearea/expandablearea-footer.demo';

export const routes: Routes = [
  { path: '',                                  component: ExpandableAreaDemoComponent }, // default
  { path: 'about',                             component: AboutDemoComponent },
  { path: 'accordion',                         component: AccordionDemoComponent},
  { path: 'alert',                             component: AlertDemoComponent},
  { path: 'application-lazy-menu',             component: ApplicationMenuLazyDemoComponent},
  { path: 'autocomplete',                      component: AutocompleteDemoComponent },
  { path: 'button',                            component: ButtonDemoComponent },
  { path: 'busyindicator',                     component: BusyIndicatorDemoComponent },
  { path: 'chart',                             component: ChartDemoComponent },
  { path: 'checkbox',                          component: CheckBoxDemoComponent },
  { path: 'colorpicker',                       component: ColorPickerDemoComponent },
  { path: 'completion-chart',                  component: CompletionChartDemoComponent },
  { path: 'context-menu',                      component: ContextMenuDemoComponent },
  { path: 'contextual-action-panel',           component: ContextualActionPanelDemoComponent },
  { path: 'datagrid-breadcrumb',               component: DataGridBreadcrumbDemoComponent },
  { path: 'datagrid-content',                  component: DataGridContentDemoComponent },
  { path: 'datagrid-dynamic',                  component: DataGridDynamicDemoComponent },
  { path: 'datagrid-editors',                  component: DataGridEditorsDemoComponent },
  { path: 'datagrid-fixedheader',              component: DataGridFixedHeaderDemoComponent },
  { path: 'datagrid-groupedheader',            component: DataGridGroupedHeaderDemoComponent },
  { path: 'datagrid-groupable',                component: DataGridGroupableDemoComponent },
  { path: 'datagrid-mixed-selection',          component: DataGridMixedSelectionDemoComponent },
  { path: 'datagrid-paging-indeterminate',     component: DataGridPagingIndeterminateDemoComponent },
  { path: 'datagrid-paging-service',           component: DataGridPagingServiceDemoComponent },
  { path: 'datagrid-service',                  component: DataGridServiceDemoComponent },
  { path: 'datagrid-settings',                 component: DataGridSettingsDemoComponent },
  { path: 'datagrid-treegrid',                 component: DataGridTreeGridDemoComponent },
  { path: 'datagrid-custom-formatter',         component: DataGridCustomFormatterDemoComponent },
  { path: 'datagrid-custom-formatter-service', component: DataGridCustomFormatterServiceDemoComponent },
  { path: 'datagrid-standard-formatter',       component: DataGridStandardFormatterDemoComponent },
  { path: 'datepicker',                        component: DatepickerDemoComponent },
  { path: 'dropdown',                          component: DropdownDemoComponent },
  { path: 'dropdown-async-busy',               component: DropdownAsyncBusyDemoComponent },
  { path: 'dropdown-async',                    component: DropdownAsyncDemoComponent },
  { path: 'dropdown-lm',                       component: DropdownLMDemoComponent },
  { path: 'dropdown-multi',                    component: DropdownMultiselectDemoComponent },
  { path: 'dropdown-simple',                   component: DropdownSimpleDemoComponent },
  { path: 'editor',                            component: EditorDemoComponent },
  { path: 'error',                             component: ErrorDemoComponent },
  { path: 'expandablearea',                    component: ExpandableAreaDemoComponent },
  { path: 'expandablearea-footer',             component: ExpandableAreaFooterDemoComponent },
  { path: 'fileupload',                        component: FileUploadDemoComponent },
  { path: 'header-tabs',                       component: HeaderTabsDemoComponent },
  { path: 'header-toolbar',                    component: HeaderToolbarDemoComponent },
  { path: 'header-toolbar-tabs',               component: HeaderToolbarAndTabsDemoComponent },
  { path: 'hierarchy',                         component: HierarchyDemoComponent },
  { path: 'hierarchy-paging',                  component: HierarchyPagingDemoComponent },
  { path: 'homepage',                          component: HomePageDemoComponent },
  { path: 'homepage-scenario-a',               component: HomePageScenarioADemoComponent },
  { path: 'homepage-scenario-b',               component: HomePageScenarioBDemoComponent },
  { path: 'homepage-scenario-c',               component: HomePageScenarioCDemoComponent },
  { path: 'hyperlink',                         component: HyperlinkDemoComponent },
  { path: 'icon',                              component: IconDemoComponent },
  { path: 'label',                             component: LabelDemoComponent },
  { path: 'listview',                          component: ListViewDemoComponent },
  { path: 'lookup',                            component: LookupDemoComponent },
  { path: 'lookup-validation',                 component: LookupValidationDemoComponent },
  { path: 'mask',                              component: MaskDemoComponent },
  { path: 'menu-button',                       component: MenuButtonDemoComponent },
  { path: 'message',                           component: MessageDemoComponent },
  { path: 'modal-dialog',                      component: ModalDialogDemoComponent },
  { path: 'popdown',                           component: PopDownDemoComponent},
  { path: 'popupmenu',                         component: PopupMenuDemoComponent },
  { path: 'progress',                          component: ProgressDemoComponent },
  { path: 'radiobutton',                       component: RadioButtonDemoComponent},
  { path: 'slider',                            component: SliderDemoComponent },
  { path: 'splitter-horizontal',               component: SplitterHorizontalDemoComponent },
  { path: 'splitter-vertical',                 component: SplitterVerticalDemoComponent },
  { path: 'step-process',                      component: StepProcessDemoComponent },
  { path: 'step-process-btn-disble',           component: StepProcessBtnDisableDemoComponent },
  { path: 'step-data-driven',                  component: StepProcessDataDrivenDemoComponent },
  { path: 'step-process-vetoable',             component: StepProcessVetoableDemoComponent },
  { path: 'swaplist',                          component: SwapListDemoComponent },
  { path: 'swaplist-dynamic',                  component: SwapListDynamicDemoComponent },
  { path: 'swaplist-full-access',              component: SwapListFullAccessDemoComponent },
  { path: 'swaplist-service',                  component: SwapListServiceDemoComponent },
  { path: 'spinbox',                           component: SpinboxDemoComponent },
  { path: 'tabs-basic',                        component: TabsBasicDemoComponent },
  { path: 'tabs-counts',                       component: TabsCountsDemoComponent },
  { path: 'tabs-datadriven',                   component: TabsDataDrivenDemoComponent },
  { path: 'tabs-dismissible',                  component: TabsDismissibleDemoComponent },
  { path: 'tabs-dropdown',                     component: TabsDropdownDemoComponent },
  { path: 'tabs-dynamic',                      component: TabsDynamicDemoComponent },
  { path: 'tabs-vertical',                     component: TabsVerticalDemoComponent },
  { path: 'textarea',                          component: TextareaDemoComponent },
  { path: 'timepicker',                        component: TimePickerDemoComponent },
  { path: 'toast',                             component: ToastDemoComponent },
  { path: 'toolbar-all-icons',                 component: ToolbarAllIconsDemoComponent },
  { path: 'toolbar-basic',                     component: ToolbarBasicDemoComponent },
  { path: 'toolbar-datadriven',                component: ToolbarDataDrivenDemoComponent },
  { path: 'toolbar-state',                     component: ToolbarStateComponent },
  { path: 'toolbar-right-aligned',             component: ToolbarRightAlignedDemoComponent },
  { path: 'tooltip',                           component: TooltipDemoComponent },
  { path: 'trackdirty',                        component: TrackDirtyDemoComponent },
  { path: 'tree-content',                      component: TreeContentDemoComponent },
  { path: 'tree-dynamic',                      component: TreeDynamicDemoComponent },
  { path: 'tree-service',                      component: TreeServiceDemoComponent },
  { path: 'tree-source',                       component: TreeSourceDemoComponent },
  { path: 'validation',                        component: ValidationFormDemoComponent},
  { path: 'validation-event',                  component: ValidationFormEventDemoComponent},
  { path: 'validation-group',                  component: ValidationFormGroupDemoComponent}
];

export const AppRoutingModule: ModuleWithProviders = RouterModule.forRoot(routes);
