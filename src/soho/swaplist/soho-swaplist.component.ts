﻿import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  EventEmitter,
  HostBinding,
  Input,
  OnDestroy,
  Output,
  ContentChild
} from '@angular/core';

type SohoSwapListCardType = 'available' | 'selected' | 'full-access';

@Component({
  selector: 'soho-swaplist-card',
  template: `
      <div [class]="cardClass">
        <div class="card-header">
          <h2 class="card-title">{{title}}</h2>
          <div class="buttons">
            <ng-content></ng-content>
          </div>
        </div>
        <div class="card-content">
          <div class="listview"></div>
        </div>
      </div>`,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SohoSwapListCardComponent {
  /** The type of card. */
  private _type: SohoSwapListCardType;

  /** The title for the card. */
  private _title: string;

  @Input()
  public set type(value: SohoSwapListCardType) {
    this._type = value;
  }

  /**
   * Return the class to use for the card.
   */
  public get cardClass(): string {
    let cardClasses = 'card';

    if (this._type) {
      cardClasses += ' ' + this._type;
    }
    return cardClasses;
  }

  /**
   * Title of the card, e.g. 'Available'.
   */
  @Input()
  public set title(value: string) {
    this._title = value;
  }

  public get title(): string {
    return this._title;
  }
}

@Component({
  selector: 'soho-swaplist',
  templateUrl: 'soho-swaplist.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SohoSwapListComponent implements AfterViewInit, OnDestroy {
  /** Used to provide unnamed controls with a unique id. */
  private static counter = 0;

  /** Selector for originating element. */
  private jQueryElement: JQuery;

  /** Reference to the SoHoXi control api. */
  private swaplist: SohoSwapListStatic;

  /** Block of options, use the accessors to modify. */
  private _options: SohoSwapListOptions = {};

  /** Default title for available items card. */
  @Input()
  public availableCardTitle = 'Available';

  /** Default title for selected items card. */
  @Input()
  public selectedCardTitle = 'Selected';

  /** Default title for additional items card. */
  @Input()
  public fullAccessCardTitle = 'Additional Items';

  /** Flag controlling the display of the full access (additional) items. */
  private _showFullAccessCard = false;

  /** The component used to represent the available items. */
  @ContentChild('available')
  private _availableCard: SohoSwapListCardComponent = null;

  /** The component used to represent the selected items. */
  @ContentChild('selected')
  private _selectedCard: SohoSwapListCardComponent = null;

  /** The component used to represent the full access (additional) items. */
  @ContentChild('additional')
  private _additionalCard: SohoSwapListCardComponent = null;

  /** Name for the swaplist control. Necessary for ngModel to function. */
  @Input() name = `soho-swaplist-${SohoSwapListComponent.counter++}`;

  /**
   * Assign the id for the control
   * (maps to the name to use on a label's 'for' attribute)
   */
  @HostBinding('id') get id() {
    return this.name;
  }

  /** Adds the 'swaplist' class required by the SoHoXi control. */
  @HostBinding('class.swaplist') get isSwapList() {
    return true;
  }

  /** Adds the 'one-third' class required when full access is set. */
  @HostBinding('class.one-third') get isOneThird() {
    return this.showFullAccessCard;
  }

  /** Called when the swap list value changes. */
  @Output()
  public selected: EventEmitter<JQueryEventObject> = new EventEmitter<JQueryEventObject>();

  /**
   * Called when the swap list updates in some way.
   */
  // tslint:disable-next-line:no-output-rename
  @Output('updated')
  public updatedEvent: EventEmitter<Object> = new EventEmitter<JQueryEventObject>();

  @Input()
  public set availableItems(value: SohoSwapListItem[]) {
    this._options.available = value;
    if (this.swaplist) {
      this.swaplist.settings.available = value;
      this.swaplist.updated();
    }
  }

  public get availableItems(): SohoSwapListItem[] {
    return this.ConvertToModel(this.swaplist.getAvailable());
  }

  @Input()
  public set selectedItems(value: SohoSwapListItem[]) {
    this._options.selected = value;
    if (this.swaplist) {
      this.swaplist.settings.selected = value;
      this.swaplist.updated();
    }
  }

  public get selectedItems(): SohoSwapListItem[] {
    return this.ConvertToModel(this.swaplist.getSelected());
  }

  @Input()
  public set additionalItems(value: SohoSwapListItem[]) {
    this._options.additional = value;
    if (this.swaplist) {
      this.swaplist.settings.additional = value;
      this.swaplist.updated();
    }
  }

  public get additionalItems(): SohoSwapListItem[] {
    return this.ConvertToModel(this.swaplist.getAdditional());
  }

  @Input()
  public set showFullAccessCard(value: boolean) {
    this._showFullAccessCard = value === null || <any>value === 'true';
  }

  public get showFullAccessCard(): boolean {
    return this._showFullAccessCard;
  }

  /** Constructor. */
  constructor(private element: ElementRef) {
  }

  ngAfterViewInit() {
    this.jQueryElement = jQuery(this.element.nativeElement);
    this.jQueryElement.swaplist(this._options);

    this.jQueryElement
      .on('selected', (event: JQueryEventObject) => this.selected.emit(event))
      .on('swapupdate', (event: JQueryEventObject, items: SohoSwapListItem[]) => this.updatedEvent.emit(event));

    this.swaplist = this.jQueryElement.data('swaplist');
  }

  /**
  * Destroys any resources created by the control.
  */
  ngOnDestroy() {
    if (this.swaplist) {
      this.swaplist.destroy();
      this.swaplist = null;
    }
  }

  /**
  * In case the list data is being bound asynchronously or modified on the fly,
  * you will need to trigger updated on so it updates the list(s).
  */
  public updated() {
    if (this.swaplist) {
      this.swaplist.updated();
    }
  }

  /**
   * Updates the dataset used by the swaplist, dynamically refesing the
   * control's view.
   *
   * @param dataset the dataset to assign.
   */
  public updateDataset(dataset: SohoSwapListOptions) {
    this._options.available = dataset.available;
    this._options.selected = dataset.selected;
    this._options.additional = dataset.additional;
    if (this.swaplist) {
      this.swaplist.updateDataset(this._options);
    }
  }

  /** Converts the list of items into a list of swaplist items. */
  private ConvertToModel(items: any[]): SohoSwapListItem[] {
    const results = [];
    for (let i = 0; i < items.length; i++) {
      const item = items[i];
      results.push({ id: item.id, value: item.value, text: item.text });
    }
    return results;
  }

}