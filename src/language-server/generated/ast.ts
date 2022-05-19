/******************************************************************************
 * This file was generated by langium-cli 0.3.0.
 * DO NOT EDIT MANUALLY!
 ******************************************************************************/

/* eslint-disable @typescript-eslint/array-type */
/* eslint-disable @typescript-eslint/no-empty-interface */
import { AstNode, AstReflection, isAstNode } from 'langium';

export interface Foo extends AstNode {
    name: string
}

export const Foo = 'Foo';

export function isFoo(item: unknown): item is Foo {
    return reflection.isInstance(item, Foo);
}

export type TestAstType = 'Foo';

export type TestAstReference = never;

export class TestAstReflection implements AstReflection {

    getAllTypes(): string[] {
        return ['Foo'];
    }

    isInstance(node: unknown, type: string): boolean {
        return isAstNode(node) && this.isSubtype(node.$type, type);
    }

    isSubtype(subtype: string, supertype: string): boolean {
        if (subtype === supertype) {
            return true;
        }
        switch (subtype) {
            default: {
                return false;
            }
        }
    }

    getReferenceType(referenceId: TestAstReference): string {
        switch (referenceId) {
            default: {
                throw new Error(`${referenceId} is not a valid reference id.`);
            }
        }
    }
}

export const reflection = new TestAstReflection();