export interface Product {
    model:             string;
    brand:             string;
    operatingSystem:   string;
    displayType:       string;
    displaySize:       number;
    resolution:        string;
    processor:         string;
    ram:               number;
    storage:           number;
    camera:            Camera[];
    batteryCapacity:   number;
    connectivity:      Connectivity;
    dimensions:        Dimensions;
    colorOptions:      string[];
    weight:            number;
    simcardSlots:      number;
    biometricFeatures: BiometricFeatures;
    specialFeatures:   SpecialFeatures;
    imageUrls:         string[];
    price:             number;
    availability:      string;
}

export interface BiometricFeatures {
    fingerPrint:     boolean;
    faceRecognition: boolean;
    irisScanning:    boolean;
}

export interface Camera {
    position: string;
    lenses:   Lense[];
}

export interface Lense {
    type:       string;
    megapixels: number;
    features:   null | string;
}

export interface Connectivity {
    wifi:      boolean;
    bluetooth: boolean;
    nfc:       boolean;
    g3:        boolean;
    g4:        boolean;
    g5:        boolean;
}

export interface Dimensions {
    length:    number;
    width:     number;
    thickness: number;
}

export interface SpecialFeatures {
    waterResistance:  boolean;
    fastCharging:     boolean;
    wirelessCharging: boolean;
    dustResistance:   boolean;
}