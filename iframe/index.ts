/// <reference types="powerapps-component-framework" />

import { IInputs, IOutputs } from "./generated/ManifestTypes";

export class MSFormsFrame implements ComponentFramework.StandardControl<IInputs, IOutputs> {

    private iframe: HTMLIFrameElement;
    private container: HTMLDivElement;
    private varboolen: boolean;

    constructor() { }

    public init(
        context: ComponentFramework.Context<IInputs>,
        notifyOutputChanged: () => void,
        state: ComponentFramework.Dictionary,
        container: HTMLDivElement
    ): void {

        this.container = container;

        context.mode.trackContainerResize(true);

        this.container.style.width = "100%";
        this.container.style.height = "100%";

        this.varboolen = false;
    }

    public updateView(
        context: ComponentFramework.Context<IInputs>
    ): void {

        if (!this.varboolen) {

            this.varboolen = true;

            this.iframe = document.createElement("iframe");

            this.iframe.style.width = "100%";
            this.iframe.style.height = "100%";
            this.iframe.style.border = "none";

            this.iframe.setAttribute("frameborder", "0");

            this.container.appendChild(this.iframe);
        }

        const srcurl = context.parameters.sampleProperty.raw;

        if (srcurl) {
            this.iframe.src = srcurl;
        }

        this.container.style.width =
            context.mode.allocatedWidth + "px";

        this.container.style.height =
            context.mode.allocatedHeight + "px";
    }

    public getOutputs(): IOutputs {
        return {};
    }

    public destroy(): void { }
}